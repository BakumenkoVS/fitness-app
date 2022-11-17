import React, { FC } from "react";
import { HeaderProps } from "./types";
import { styles } from "./Header.styles";
import  nav  from "../../images/Navigation-icon.svg";
import { Link } from 'react-router-dom';

const Header: FC<HeaderProps> = () => {
   return (
      <div css={styles.box}>
         {/* <img src={nav} alt='Иконка навигации' css={styles.img}/> */}
         <Link to='signin' css={styles.button}>Вход</Link>
      </div>
   );
};

export default Header;
