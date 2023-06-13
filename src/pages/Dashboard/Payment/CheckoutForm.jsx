import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import "./CheckoutForm.css";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [courses] = useSelectedClasses();
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const course = courses.find((course) => course._id === id);
  const price = parseFloat(course?.price.toFixed(2));

  const { data: clientSecret } = useQuery(["payment-intent"], async () => {
    if (price > 0) {
      const res = await axiosSecure.post("/create-payment-intent", { price });
      return res.data.clientSecret;
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      //   console.log("payment method", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Anonymous",
            name: user?.name || "Anonymous",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError);
    }
    console.log("intrent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;
      const payment = {
        email: user?.email,
        transactionId,
        price,
        image: course?.image,
        date: new Date(),
        selectedCourse: course?._id,
        courseId: course?.CourseId,
        courseName: course?.name,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId && res.data.deletedResult.deletedCount && res.data.updatedResult.modifiedCount) {
          alert("post & delete worked");
        }
      });
    }
  };
  return (
    <>
      <form className="mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <Button type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </Button>
      </form>
      {cardError && <p className="text-orange-800">{cardError}</p>}
      {transactionId && (
        <p className="text-blue-800">
          Transaction Completed Successfully with Transaction Id:{" "}
          {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
