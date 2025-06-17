import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeForm from '../components/paymentGateway/StripeForm';

// Use your Stripe publishable key (replace with your test key)
const stripePromise = loadStripe('pk_test_51OKPftGHmtKrryCB9doNjQ5yrmVUAKFKhejlLQDOiL6O95vm38lfNXL2xGMRVumZCvXOl7RLtqhVbfcRsFsKdL7n00yVlvwPVw'); // Replace with your test publishable key

// Use a test clientSecret (e.g., from Stripe test mode or hardcoded for demo)
const clientSecret = 'seti_1RTR5qGHmtKrryCBXjg94muh_secret_SODWDik8w0fqfctOY4gMGok8T5dZJdg'; // Replace with a valid test clientSecret

const StripeProvider = () => {
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <StripeForm />
    </Elements>
  );
};

export default StripeProvider;
