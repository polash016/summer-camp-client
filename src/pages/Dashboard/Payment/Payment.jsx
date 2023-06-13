import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    
    const {id} = useParams()
    console.log(id)
    return (
        <div className='ml-8'>
           <h2 className="text-3xl"> payment korte hbe</h2>
           <Elements stripe={stripePromise}>
                <CheckoutForm id={id}></CheckoutForm>
           </Elements>
        </div>
    );
};

export default Payment;