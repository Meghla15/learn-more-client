import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PaymentPage = () => {
    const {id} = useParams()
   
    return (
        <div className="">
            <div>
                <Elements  stripe={stripePromise} >
                    <CheckoutForm id={id}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentPage;