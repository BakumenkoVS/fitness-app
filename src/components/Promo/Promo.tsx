import React, { FC } from "react";
import { PromoProps } from "./types";
import { styles } from "./Promo.styles";

const Promo: FC<PromoProps> = () => {
   return (
      <div css={styles.box}>
         Набор основных блоков с информацией 
      </div>
   );
};

export default Promo;
