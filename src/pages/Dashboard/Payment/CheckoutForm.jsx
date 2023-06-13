import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import './CheckoutForm.css'
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const CheckoutForm = ({id}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState("");
  const [courses,refetch] = useSelectedClasses();
  const course = courses.find(course => course._id === id);
  const price = parseFloat(course?.price.toFixed(2))

    const {data: clientSecret} = useQuery(["payment-intent"], async() => {
        if(price > 0){
           const res = await axiosSecure.post('/create-payment-intent', {price})
           console.log(res.data.clientSecret)
            return res.data.clientSecret
    }
})
    console.log('secret', clientSecret)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
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
        <Button type="submit" disabled={!stripe}>
          Pay 
        </Button>
      </form>
      {cardError && <p className="text-orange-800">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
