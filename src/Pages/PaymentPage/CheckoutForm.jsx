import { CardElement } from '@stripe/react-stripe-js';
// import React, { useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    // const [error, setError] = useState('');
    // const [clientSecret, setClientSecret] = useState('')
    // const [transactionId, setTransactionId] = useState('');
    // const stripe = useStripe();
    // const elements = useElements();
    // const axiosSecure = useAxiosSecure();
    const {user} = UseAuth();
    // const navigate = useNavigate();
    const handleSubmit = e =>{
        e.preventDefault()
       
    }
    return (
        <div>
            
            <div className="mb-24 ">
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 space-y-3">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Please Confirm Your Payment</h2>

    <form onSubmit={handleSubmit}>
        <div className="">
            <div className='flex justify-between mb-2'>
            <p>User Name : {user.displayName}</p>
            <p>User Email : {user.email}</p>
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
            {/* <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>} */}
       
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5  transition-colors duration-300 transform bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Confirm</button>
        </div>
    </form>
</section> 
        </div>
        </div>
    );
};

export default CheckoutForm;
