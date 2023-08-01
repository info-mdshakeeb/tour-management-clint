'use client'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';


import AlertMessage from '@/Hooks/Alert';
import { useDeleteCartMutation, useGetCartQuery } from '@/redux/feature/cart/cartApi';
import { useAddPaymentMutation, useCreatePaymentIntentMutation } from '@/redux/feature/payment/paymentApi';

const CheckoutForm = ({ product, setProduct }) => {
    const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
    const { data } = useGetCartQuery(userId)
    const { successMessage } = AlertMessage()
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    const [createPaymentIntent] = useCreatePaymentIntentMutation()
    const [addPayment] = useAddPaymentMutation()
    const [deleteCart] = useDeleteCartMutation()

    useEffect(() => {
        createPaymentIntent({ price: product?.total })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [product])

    // console.log(product.tourId);

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
                ...product,
                paymentDate: new Date().toDateString(),
            }
            addPayment(confirmPayment)
                .then(res => {
                    successMessage('Payment Successful')
                    deleteCart(product?._id)
                })
        }
    };
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