import { q, T } from "../ssr.js";
function useRoute() {
  const { locale: currentLocale } = q().props;
  return (name, params = {}) => {
    const locale = params.locale || currentLocale;
    return T(name, { locale, ...params });
  };
}
export {
  useRoute as u
};
