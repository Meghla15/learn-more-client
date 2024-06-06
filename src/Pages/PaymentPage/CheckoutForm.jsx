// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import UseAuth from "../../Hooks/UseAuth";
// const CheckoutForm = () => {
//     const studySection = useLoaderData();
//     console.log(studySession)
//     const {sessionTitle, registrationFee} = studySession || {}
//     console.log(studySession)
//     const [error, setError] = useState('');
//     const [clientSecret, setClientSecret] = useState('')
//     const [transactionId, setTransactionId] = useState('');
//     const stripe = useStripe();
//     const elements = useElements();
//     const axiosSecure = useAxiosSecure();
//     const { user } = UseAuth();
//     const navigate = useNavigate();

//     const handleSubmit = async (event) =>{
//         event.preventDefault();
//         if (!stripe || !elements) {
//             return
//         }
//         const card = elements.getElement(CardElement)

//         if (card === null) {
//             return
//         }
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })
//         if (error) {
//             console.log('payment error', error);
//             setError(error.message);
//         }
//         else {
//             console.log('payment method', paymentMethod)
//             setError('');
//         }

//           // confirm payment
//           const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card,
//                 billing_details: {
//                     email: user?.email || 'anonymous',
//                     name: user?.displayName || 'anonymous'
//                 }
//             }
//         })
//         if (confirmError) {
//             console.log('confirm error')
//         }
//         else {
//             console.log('payment intent', paymentIntent)
//             if (paymentIntent.status === 'succeeded') {
//                 console.log('transaction id', paymentIntent.id);
//                 setTransactionId(paymentIntent.id);

//                 // now save the payment in the database
//                 const payment = {
//                     email: user.email,
//                     price: totalPrice,
//                     transactionId: paymentIntent.id,
//                     date: new Date(), 
//                     // cartIds: cart.map(item => item._id),
//                     // menuItemIds: cart.map(item => item.menuId),
//                     status: 'pending'
//                 }

//                 // const res = await axiosSecure.post('/payments', payment);
//                 console.log('payment saved', res.data);
//                 if(res.data?.paymentResult?insertedId){
//                     Swal.fire({
//                         position: "top-end",
//                         icon: "success",
//                         title: "Your Payment is Successfully Done",
//                         showConfirmButton: false,
//                         timer: 1500
//                     })
//                 }
//                 }
//     }
// }
    
//     return (
//         <div className="mb-24">
//           <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
//     <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Please Confirm Your Payment</h2>

//     <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
//             <div>
//                 <label className="text-gray-700 dark:text-gray-200" >Username</label>
//                 <input id="username" type="text" defaultValue={user?.displayName || "Name Not Founded"}  disabled placeholder="by default user Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring "/>
//             </div>

//             <div>
//                 <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
//                 <input id="emailAddress" type="email" defaultValue={user?.email || "Email Not Founded"}  disabled  placeholder="by default user email"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
//             </div>

//             <div>
//                 <label className="text-gray-700 dark:text-gray-200" >Course Title</label>
//                 <input  type="text" defaultValue={sessionTitle} disabled className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
//             </div>

//             <div>
//                 <label className="text-gray-700 dark:text-gray-200" >Registration Fee</label>
//                 <input  type="text" defaultValue={registrationFee} disabled className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
//             </div>
            
//             <CardElement
//                 options={{
//                     style: {
//                         base: {
//                             fontSize: '16px',
//                             color: '#424770',
//                             '::placeholder': {
//                                 color: '#aab7c4',
//                             },
//                         },
//                         invalid: {
//                             color: '#9e2146',
//                         },
//                     },
//                 }}
//             />
//             <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
//                 Pay
//             </button>
//             <p className="text-red-600">{error}</p>
//             {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
       
//         </div>

//         <div className="flex justify-end mt-6">
//             <button className="px-8 py-2.5 leading-5  transition-colors duration-300 transform bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Confirm</button>
//         </div>
//     </form>
// </section> 
//         </div>
//     );
// };

// export default CheckoutForm;