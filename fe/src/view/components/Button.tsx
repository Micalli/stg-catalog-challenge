import { ComponentProps } from "react";
import { cn } from '../../lib/utils';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
  variant?: "danger" | "ghost";
}
export function Button({
  className,
  isLoading,
  disabled,
  variant,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        "bg-blue-900 hover:bg-blue-700 disabled:bg-gray-100 px-6 h-12 rounded-2xl font-medium text-white disabled:text-gray-400 disabled:cursor-not-allowed  cursor-pointer transition-all active:bg-blue-950 flex items-center justify-center",
        variant === "danger" && "bg-red-900 hover:bg-red-700",
        variant === "ghost" &&
          "bg-transparent  hover:bg-gray-800/5 text-gray-800 border border-gray-900",

        className
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner classname="w-6 h-6" />}
    </button>
  );
}
