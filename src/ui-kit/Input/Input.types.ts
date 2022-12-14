import React, { HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
   value?: string | number;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   labels?: string;
   img?: string;
   type?: string;
   setInputValue?: (value: string[]) => void;
   setNumberOfDays?: (value: number) => void;
   onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
   maxLength?: number;
   minLength?: number;
   name?: string;
}
