import { jsxs, jsx } from "react/jsx-runtime";
function LandingSubscribePay({ subscription, period, planSlug, clientSecret }) {
  console.log("Subscription:", subscription);
  console.log("Period:", period);
  console.log("Plan Slug:", planSlug);
  console.log("Client Secret:", clientSecret);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: "Subscribe to Our Service" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg mb-8", children: "Get exclusive access to premium content and features." }),
    /* @__PURE__ */ jsx("button", { className: "px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300", children: "Subscribe Now" })
  ] });
}
export {
  LandingSubscribePay as default
};
