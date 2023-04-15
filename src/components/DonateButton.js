/*import React, { useEffect, useMemo, useRef } from 'react';

let counter = 0;

const generateId = () => {
    return `ID-${++counter}`; // if it is necessary, use some better unique id generator
};

const DonateButton = () => {
    const buttonRef = useRef(null);
    const buttonId = useMemo(() => `ID-${generateId()}`, []);
    useEffect(() => {
        const button = window.PayPal.Donation.Button({
            env: 'production',
            hosted_button_id: '8KU9E6KANPJFA',
            image: {
                src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
                alt: 'Donate with PayPal button',
                title: 'PayPal - The safer, easier way to pay online!',
            }
        });
        button.render(`#${buttonRef.current.id}`); // you can change the code and run it when DOM is ready
    }, []);
    return (
        <div ref={buttonRef} id={buttonId} />
    );
};

export default DonateButton;*/

import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const ButtonWrapper = ({ currency }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency]);

 
     return (<PayPalButtons
        fundingSource="paypal"
        style={{"layout":"vertical","label":"donate"}}
        disabled={false}
        createOrder={(data, actions) => {
            return actions.order
                .create({
                    purchase_units: [
                        {
                            amount: {
                                value: "2",
                                breakdown: {
                                    item_total: {
                                        currency_code: "USD",
                                        value: "2",
                                    },
                                },
                            },
                            items: [
                                {
                                    name: "donation-example",
                                    quantity: "1",
                                    unit_amount: {
                                        currency_code: "USD",
                                        value: "2",
                                    },
                                    category: "DONATION",
                                },
                            ],
                        },
                    ],
                })
                .then((orderId) => {
                    // Your code here after create the donation
                    return orderId;
                });
        }}
    />
     );
} 

 export default function DonateButton() {
     return (
        <div
             style={{ maxWidth: "75px", maxHeight: "200px", marginTop: "50px" }}
        >
            <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
                <ButtonWrapper
                    currency={"USD"}
                />
            </PayPalScriptProvider>
        </div>
    );
 }