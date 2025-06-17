import { jsx } from "react/jsx-runtime";
import useDeviceDetect from "./useDeviceDetect-BMZuEs7G.js";
import "react";
function Row({ children, quantity }) {
  const { isMobile, isTablet, isDesktop } = useDeviceDetect();
  return /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 gap-4 ${isTablet ? `sm:grid-cols-2` : ""} ${isDesktop ? `lg:grid-cols-${quantity}` : ""}`, style: { gridTemplateColumns: `repeat(${isMobile ? 1 : isTablet ? 2 : quantity}, minmax(0, 1fr))` }, children });
}
export {
  Row as default
};
