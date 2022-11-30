import React, { FC, useEffect, useState } from "react";
import { styles } from "./Input.styles";
import { InputProps } from "./Input.types";

const useValidation = (value: string, validations: any) => {
   const [isEmpty, setEmpty] = useState<boolean>(true);
   const [minLengthError, setMinLengthError] = useState<boolean>(false);
   const [inputValid, setInputValid] = useState<boolean>(false);
   const [maxLengthError, setMaxLengthError] = useState<boolean>(false);
   const [isEmail, setIsEmail] = useState<boolean>(false);

   useEffect(() => {
      for (const validation in validations) {
         switch (validation) {
            case "minLength":
               value.length < validations[validation]
                  ? setMinLengthError(true)
                  : setMinLengthError(false);
               break;
            case "isEmpty":
               value ? setEmpty(false) : setEmpty(true);
               break;

            case "isEmail":
               var pattern =
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               pattern.test(String(value).toLocaleLowerCase())
                  ? setIsEmail(false)
                  : setIsEmail(true);
               break;

            case "maxLength":
               value.length > validations[validation]
                  ? setMaxLengthError(true)
                  : setMaxLengthError(false);
               break;
         }
      }
   }, [value]);

   useEffect(() => {
      if (isEmpty || minLengthError) {
         setInputValid(false);
      } else {
         setInputValid(true);
      }
   }, [isEmpty, minLengthError]);

   return {
      isEmpty,
      minLengthError,
      inputValid,
      isEmail,
      maxLengthError,
   };
};

export const useInput = (initialValue: string, validations: any) => {
   const [value, setValue] = useState(initialValue);
   const [isDirty, setDirty] = useState<boolean>(false);

   const valid = useValidation(value, validations);

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setDirty(true);
   };

   const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDirty(true);
   };

   return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid,
   };
};

const Input: FC<InputProps> = ({
   value,
   onChange,
   labels,
   type,
   onFocus,
   maxLength,
   minLength,
   onBlur,
}) => {
   return (
      <section className="InputSection">
         <div css={styles.box}>
            <label css={styles.inputLabel}>{labels}</label>

            <input
               css={styles.input}
               value={value}
               type={type}
               onChange={onChange}
               placeholder="введите данные"
               onFocus={onFocus}
               maxLength={maxLength}
               minLength={minLength}
               onBlur={onBlur}
            />
         </div>
      </section>
   );
};
export default Input;
