import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButtone = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HlBDYBskOAzOx9ue1xpiPaqwhXsjffKocqfVHPSwIZ7pmAkeq9ga217Lhz50W6OaPSO8jEj9J8tO44omlFAq13z00ppWZinRR';
const onToken = token =>{
    console.log(token);
    alert('Payment Successful');
}

    return(
        <StripeCheckout 
        label='Pay Now'
        name='Crwn Cloating Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButtone;