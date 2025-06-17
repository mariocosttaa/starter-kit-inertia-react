import { q, T } from "../ssr.js";
function route(name, params = {}) {
  const { locale: currentLocale } = q().props;
  const locale = params.locale || currentLocale;
  return T(name, { locale, ...params });
}
export {
  route as r
};
