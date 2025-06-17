import Cookies from "js-cookie";
const setSubscriptionPeriodCookie = (period) => {
  Cookies.set("subscription_period", period, { path: "/" });
};
const getSubscriptionPeriodCookie = () => {
  return Cookies.get("subscription_period") || null;
};
export {
  getSubscriptionPeriodCookie as g,
  setSubscriptionPeriodCookie as s
};
