import React, { FC } from "react";
import { LoginProps } from "./types";
import { styles } from "./Login.styles";
import Input from "../../ui-kit/Input/Input";
import { useInput } from "../../ui-kit/Input/Input";
import { error } from "console";

const Login: FC<LoginProps> = () => {
   const email = useInput("", { isEmail: true });
   const password = useInput("", { isEmpty: true, minLength: 5, maxLength: 7 });
   return (
      <div css={styles.box}>
         <h2 css={styles.title}>Рады вдеть</h2>
         <form css={styles.inputForm}>
            <Input
               onChange={(e) => email.onChange(e)}
               onBlur={(e) => email.onBlur(e)}
               value={email.value}
               labels="email"
               name="email"
               maxLength={40}
               minLength={3}
            />
            {email.isDirty && email.error && (
               <span css={styles.error}>{email.error}</span>
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
            {password.isDirty && password.error && (
               <div css={styles.error}>{password.error}</div>
            )}

            <button
               disabled={email.inputValid && password.inputValid}
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
