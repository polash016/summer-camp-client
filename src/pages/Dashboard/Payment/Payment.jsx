import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
  const { id } = useParams();
  return (
    <div className="ml-16">
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <SectionTitle heading="Pay Here"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm id={id}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
