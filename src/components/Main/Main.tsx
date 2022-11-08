import React, { FC } from "react";
import { MainProps } from "./types";
import { styles } from "./Main.styles";
import Header from "../Header/Header";
import Promo from '../Promo/Promo';
import Footer from "../Footer/Footer";

const Main: FC<MainProps> = () => {
   return (
      <div css={styles.box}>
         <Header />
         <Promo />
         <Footer />
      </div>
   );
};

export default Main;
