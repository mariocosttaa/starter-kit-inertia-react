import { jsx } from "react/jsx-runtime";
function Card({
  children,
  className = "",
  classNameAdd,
  animate = true,
  ...props
}) {
  const animateClasses = animate ? "hover:animate-hover-lift animate-scale-in" : "";
  const classes = `bg-white dark:bg-dark-card bg-opacity-95 dark:bg-opacity-85 rounded-xl p-4 shadow-soft dark:shadow-soft-dark transition-all duration-300 ${animateClasses} ${className} ${classNameAdd ?? ""}`.trim();
  return /* @__PURE__ */ jsx("div", { className: classes, ...props, children });
}
export {
  Card as default
};
