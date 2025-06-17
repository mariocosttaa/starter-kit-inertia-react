import { jsx } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
const buttonVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "bg-primary",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "",
        xs: "btn-xs",
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg"
      },
      general: {
        primary: "btn btn-primary",
        secondary: "btn btn-secondary",
        success: "btn btn-success",
        info: "btn btn-info",
        warning: "btn btn-warning",
        danger: "btn btn-danger",
        light: "btn btn-light",
        dark: "btn btn-dark"
      },
      light: {
        primary: "bg-primary-subtle text-primary",
        secondary: "bg-secondary-subtle text-secondary",
        success: "bg-success-subtle text-success",
        info: "bg-info-subtle text-info",
        warning: "bg-warning-subtle text-warning",
        danger: "bg-danger-subtle text-danger"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: buttonVariants({ variant, size, className }),
      ...props
    }
  );
}
export {
  Button,
  buttonVariants
};
