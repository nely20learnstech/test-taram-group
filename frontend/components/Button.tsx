import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  variant = "primary",
  icon,
  iconPosition = "left",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 rounded-xl font-semibold transition-colors" +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 " +  
    "h-12 md:h-14 lg:h-16 min-w-65" ;  

  const variants = {
    primary:  "bg-turquoise hover:scale-110 transition-transform text-dark-gray"+          
    "text-[clamp(1rem,2vw,1.5rem)]",
    secondary:
      "bg-transparent text-turquoise border border-turquoise" +         
      "text-[clamp(0.5rem,1.5vw,1.3rem)]",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center text-[1.25em]">{icon}</span>
      )}

      <span className="whitespace-nowrap">{children}</span>

      {icon && iconPosition === "right" && (
        <span className="flex items-center text-[1.25em]">{icon}</span>
      )}
    </button>
  );
}
