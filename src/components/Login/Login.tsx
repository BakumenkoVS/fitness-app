import React, { FC } from "react";
import { LoginProps } from "./types";
import { styles } from "./Login.styles";
import Input from "../../ui-kit/Input/Input";
import { useInput } from "../../ui-kit/Input/Input";

const Login: FC<LoginProps> = () => {
   const email = useInput("", { isEmpty: true, minLength: 3 });
   const password = useInput("", { isEmpty: true, minLength: 5 });
   return (
      <div css={styles.box}>
         <h2 css={styles.title}>Рады вдеть</h2>
         <form css={styles.inputForm}>
            {email.isDirty && email.isEmpty && (
               <div style={{ color: "red" }}>Ошибка валидации</div>
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

            <Input
               value={password.value}
               onChange={(e) => password.onChange(e)}
               onBlur={(e) => password.onBlur(e)}
               labels="password"
               name="password"
               maxLength={40}
               minLength={6}
            />
            <button type="submit" css={styles.submitButton}>
               Войти
            </button>
         </form>
      </div>
   );
};

export default Login;
