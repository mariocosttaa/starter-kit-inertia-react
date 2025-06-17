import { jsx } from "react/jsx-runtime";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeForm from "./StripeForm-DzE279Eg.js";
import "react";
const stripePromise = loadStripe("pk_test_51OKPftGHmtKrryCB9doNjQ5yrmVUAKFKhejlLQDOiL6O95vm38lfNXL2xGMRVumZCvXOl7RLtqhVbfcRsFsKdL7n00yVlvwPVw");
const clientSecret = "seti_1RTR5qGHmtKrryCBXjg94muh_secret_SODWDik8w0fqfctOY4gMGok8T5dZJdg";
const StripeProvider = () => {
  return /* @__PURE__ */ jsx(Elements, { stripe: stripePromise, options: { clientSecret }, children: /* @__PURE__ */ jsx(StripeForm, {}) });
};
export {
  StripeProvider as default
};
