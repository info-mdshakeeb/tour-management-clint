'use client'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';


import AlertMessage from '@/Hooks/Alert';
import { useGetCartQuery } from '@/redux/feature/cart/cartApi';

const CheckoutForm = ({ product, setProduct }) => {
    const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
    const { data } = useGetCartQuery(userId)
    const { successMessage } = AlertMessage()
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState("");



    const handelDelete = (product) => {
        fetch(`https://iconic-server-v2.vercel.app/api/v2/cart/payment?email=${user?.email}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product })
        })
            .then(res => res.json())
            .then(data => {
                setProduct(null)
            })
    }
    const addToDb = (product) => {
        fetch(`https://iconic-server-v2.vercel.app/api/v2/cart/payment/confirmed?email=${user?.email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                setProduct(null)
                handelDelete(product)
                successMessage('Payment Successful')
            })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const address = form.address.value;
        if (!stripe || !elements) { return; }
        const card = elements.getElement(CardElement);

        if (card == null) { return; }
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card, });

        if (error) {
            setError(error)
        } else { setError(null) }
        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: product?.userEmail,
                    },
                },
            },
        );
        if (confirmationError) {
            setError(confirmationError); return;
        }
        if (paymentIntent.status === "succeeded") {
            const confirmPayment = {
                paymentID: paymentIntent.id,
                address,
                ...product,
                data: new Date().toDateString(),
                status: 'Confirmed',
            }
            console.log(confirmPayment);
        }
    };
    // if (isLoading) return <div className='text-center mt-10'>Loading...</div>

    return (
        <form onSubmit={handleSubmit}>
            <div className=" ">
                <div className="mb-4">

                </div>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn-warning btn btn-sm mt-6' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
            {error && <p className='text-red-600 mt-4'>{error.message}</p>}
        </form>
    );
};

export default CheckoutForm;