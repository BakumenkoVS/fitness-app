import React, { FC } from "react";
import { FooterProps } from "./types";
import { styles } from "./Footer.styles";

const Footer: FC<FooterProps> = () => {
   return (
      <div css={styles.box}>
         <div>Footer</div>
      </div>
   );
};

export default Footer;
