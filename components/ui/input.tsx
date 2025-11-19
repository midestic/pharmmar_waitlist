import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "focus-visible:border-[#1AABC7]  file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-[#EBEEF2] flex  w-full min-w-0 rounded-[12px] border  h-[58px] px-[20px] py-[18px] text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        // "focus-visible:border-ring focus-visible:ring-ring/50",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };

interface CustomNumberInputProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

export function CustomNumberInput({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled = false,
  className = "",
}: CustomNumberInputProps) {
  const [internalValue, setInternalValue] = useState<number>(value);
  const [isTyping, setIsTyping] = useState(false);

  const updateValue = (newValue: number) => {
    const clamped = Math.max(min, Math.min(max, newValue));
    setInternalValue(clamped);
    onChange?.(clamped);
  };

  return (
    <div
      className={`flex items-center border rounded-[12px] overflow-hidden h-[58px] w-full ${
        disabled ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
    >
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={internalValue}
        onChange={(e) => {
          const num = parseInt(e.target.value.replace(/\D/g, ""), 10);
          updateValue(Number.isNaN(num) ? min : num);
        }}
        onFocus={() => setIsTyping(true)}
        onBlur={() => setIsTyping(false)}
        className={`w-full pl-4 text-base focus:outline-none ${
          isTyping ? "bg-white" : "bg-transparent"
        }`}
      />
      <button
        type="button"
        onClick={() => updateValue(internalValue - step)}
        className="h-9 w-9 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 mr-1 rounded-sm"
      >
        <Minus className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => updateValue(internalValue + step)}
        className="h-9 w-9 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-sm mr-3"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
