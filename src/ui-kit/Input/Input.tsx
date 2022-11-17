import React, { FC } from "react";
import { styles } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = ({
   value,
   onChange,
   labels,
   type,
   onFocus,
   maxLength,
   minLength,
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
            />
         </div>
      </section>
   );
};
export default Input;
