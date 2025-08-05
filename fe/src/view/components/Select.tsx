import { useState } from "react";
import * as RdxSelect from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon, OctagonX } from "lucide-react";
import { cn } from '../../lib/utils';

interface SelectProps {
  name?: string;
  error?: string;
  className?: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange?(value: string): void;
  value?: string;
}

export function Select({
  error,
  className,
  placeholder,
  options,
  onChange,
  value,
}: SelectProps) {
  function handleSelect(value: string) {
    setSelectedValue(value);
    onChange?.(value);
  }
  const [selectedValue, setSelectedValue] = useState(value ?? "");
  return (
    <div>
      <div className="relative">
        <label
          className={cn(
            "absolute z-10  top-1/2 -translate-y-3 left-5 text-gray-700 pointer-events-none text-sm",
            selectedValue &&
              " text-xs left-[19px] top-2 transition-all translate-y-0"
          )}
        >
          {placeholder}
        </label>
        <RdxSelect.Root value={value} onValueChange={handleSelect}>
          <RdxSelect.Trigger
            className={cn(
              "bg-transparent cursor-pointer w-full rounded-lg border border-gray-500 px-3 h-[49px] pt-4 text-gray-800  focus:border-gray-800 transition-all outline-none text-left relative",
              error && "!border-red-900",
              className
            )}
            aria-label="Category"
          >
            <RdxSelect.Value />
            <RdxSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
              <ChevronDownIcon className="w-6 h-6 text-gray-800" />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>
          <RdxSelect.Portal>
            <RdxSelect.Content className="z-[99] overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-[0px_11px_20px_0px_rgba(0,0,0,0,10)]">
              <RdxSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
                <ChevronUpIcon className="w-6 h-6 text-gray-900" />
              </RdxSelect.ScrollUpButton>
              <RdxSelect.Viewport className=" p-2">
                {options.map((options) => (
                  <RdxSelect.Item
                    key={options.value}
                    className={cn(
                      "p-2 text-gray-800 text-sm data-[state=checked]:font-bold outline-none data-[highlighted]:bg-gray-100 rounded-lg transition-colors cursor-pointer",
                      className
                    )}
                    value={options.value}
                  >
                    <RdxSelect.ItemText>{options.label}</RdxSelect.ItemText>
                  </RdxSelect.Item>
                ))}
              </RdxSelect.Viewport>
              <RdxSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white ext-gray-800 cursor-default">
                <ChevronDownIcon />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>
      {error && (
        <div className="flex gap-2 items-center mt-2 text-red-900">
          <OctagonX />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}

