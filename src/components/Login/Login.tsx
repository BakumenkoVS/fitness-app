import React, { FC } from "react";
import { LoginProps } from "./types";
import { styles } from "./Login.styles";
import Input from "../../ui-kit/Input/Input";
import { useInput } from "../../ui-kit/Input/Input";

const Login: FC<LoginProps> = () => {
   const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
   const password = useInput("", { isEmpty: true, minLength: 5, maxLength: 7 });
   return (
      <div css={styles.box}>
         <h2 css={styles.title}>Рады вдеть</h2>
         <form css={styles.inputForm}>
            {email.isDirty && email.isEmpty && (
               <div style={{ color: "red" }}>Ошибка валидации</div>
            )}
            {email.isDirty && email.minLengthError && (
               <div style={{ color: "red" }}>Малое количество символов</div>
            )}
            {email.isDirty && email.isEmail && (
               <div style={{ color: "red" }}>Некорректный Email</div>
            )}
            <Input
               onChange={(e) => email.onChange(e)}
               onBlur={(e) => email.onBlur(e)}
               value={email.value}
               labels="email"
               name="email"
               maxLength={40}
               minLength={3}
            />
            {password.isDirty && password.isEmpty && (
               <div style={{ color: "red" }}>Ошибка валидации</div>
            )}
            {password.isDirty && password.minLengthError && (
               <div style={{ color: "red" }}>Малое количество символов</div>
            )}
            {password.isDirty && password.maxLengthError && (
               <div style={{ color: "red" }}>Большое количество символов</div>
            )}

            <Input
               value={password.value}
               onChange={(e) => password.onChange(e)}
               onBlur={(e) => password.onBlur(e)}
               labels="password"
               name="password"
               maxLength={40}
               minLength={6}
            />
            <button
               disabled={!email.inputValid || !password.inputValid}
               type="submit"
               css={styles.submitButton}
            >
               Войти
            </button>
         </form>
      </div>
   );
};

export default Login;
