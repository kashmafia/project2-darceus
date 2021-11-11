import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51JrXciJ2O3RVC57ZIeiNXfkXFCCRqQsHJf2KjpkbqnSAUEejv2zboJFYGXkHaN3rsFp1jU7QYaxflxaeCGXezCXD00FauXa8rx"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <div>
            <Elements stripe={stripeTestPromise}>
                <PaymentForm/>
            </Elements>
        </div>
    )
}
