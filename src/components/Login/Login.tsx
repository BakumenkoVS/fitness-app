import React, { FC } from "react";
import { LoginProps } from "./types";
import { styles } from "./Login.styles";
import Input from '../../ui-kit/Input/Input';

const Login: FC<LoginProps> = () => {
   return (
      <div css={styles.box}>
         <h2 css={styles.title}>Рады вдеть</h2>
         <form css={styles.inputForm}>
            <Input labels="email" name="email" maxLength={40} minLength={2}/>
            <Input labels="password" name='password' maxLength={40} minLength={6}/>
            <button
            type="submit"
            css={styles.submitButton}
            >Войти</button>
         </form>
      </div>
   );
};

export default Login;
