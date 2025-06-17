import { jsxs, jsx } from "react/jsx-runtime";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success"
        // Adjust as needed
      }
    });
    if (error) {
      setErrorMessage(error.message || "An unexpected error occurred");
    } else {
      setErrorMessage(null);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(PaymentElement, {}),
    /* @__PURE__ */ jsx("button", { type: "submit", disabled: !stripe, children: "Pay Now" }),
    errorMessage && /* @__PURE__ */ jsx("div", { style: { color: "red" }, children: errorMessage })
  ] });
};
export {
  StripeForm as default
};
