// ------------version 2--------------
import { Button } from 'flowbite-react';
import React from 'react'
import { usePaystackPayment } from 'react-paystack'
import { toast } from "react-toastify";

const PaymentHandler = ({email, amount, change, item, type, profileHandler, profile}) => {

    const onSuccess = (reference) => {
        if(reference.status === 'success'){
            toast.success('Payment Successful');
            if(item && type) {
                profileHandler({...profile, reference: reference.reference_id  });
                change();
            }
        } else {
            toast.error('Error during payment');
        }
    };

    const onClose = () => {
        toast.info("Payment cancelled");
    };

    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount * 100, // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    };

    const initializePayment = usePaystackPayment(config);

    return (
        <div>
            <Button className="w-full rounded-sm bg-green-500 text-slate-50 my-2" 
                onClick={() => {
                    initializePayment(onSuccess, onClose)
                }}
            >
                Pay
            </Button>
        </div>
    );
}

export default PaymentHandler