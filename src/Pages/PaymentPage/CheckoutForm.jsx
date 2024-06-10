import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    // const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    // const navigate = useNavigate();
    const studySession = useLoaderData();
   
    const {registrationFee} = studySession || {}
    const registrationFeeNumber = parseInt(registrationFee.replace("$", ""));
console.log(registrationFeeNumber);
    
    
    

    useEffect(() => {
        if (registrationFeeNumber > 0) {
            axiosSecure.post('/create-payment-intent', { price: registrationFeeNumber })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, registrationFeeNumber])


    const handleSubmit = async(event) =>{
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }
        
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }
       
    }
    return (
        <div>
            
            <div className="mb-24 ">
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 space-y-3">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Please Confirm Your Payment</h2>

    <form onSubmit={handleSubmit}>
        <div className="">
            <div className='flex justify-between mb-2'>
           
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
            
       
        </div>

        <div className="flex justify-end mt-6">
        <button className="px-8 py-2.5 leading-5  transition-colors duration-300 transform bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type="submit" disabled={!stripe || !clientSecret}>
                Confirm
            </button>
            <p className="text-red-600">{error}</p>
            {/* {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>} */}
          
        </div>
    </form>
</section> 
        </div>
        </div>
    );
};

export default CheckoutForm;
