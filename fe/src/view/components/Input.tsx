import { ComponentProps, forwardRef } from "react";
import { OctagonX } from "lucide-react";
import { cn } from '../../lib/utils';

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...props }, ref) => {
    const inputId = id ?? name;
    return (
      <div className="relative">
        <input
          {...props}
          name={name}
          ref={ref}
          id={inputId}
          className={cn(
            "bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-blue-800 transition-all outline-none",
            error && "!border-red-900",
            className
          )}
          placeholder=""
        />

        <label
          htmlFor={inputId}
          className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-sm  peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>
        {error && (
          <div className="flex gap-2 items-center mt-2 text-red-900">
            <OctagonX />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);
