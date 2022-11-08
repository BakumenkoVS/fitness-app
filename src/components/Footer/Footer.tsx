import React, { FC } from "react";
import { FooterProps } from "./types";
import { styles } from "./Footer.styles";

const Footer: FC<FooterProps> = () => {
   return (
      <div css={styles.box}>
         <h1 css={styles.title}>Контакты</h1>
         <a href="https://vk.com/lida.kornewa" css={styles.link} target="blank">
            <p css={styles.subTitle}>Вконтакте</p>
         </a>
         <a
            href="https://t.me/+uZ6ftt2rDWI4YzIy"
            css={styles.link}
            target="blank"
         >
            <p css={styles.subTitle}>Телеграмм</p>
         </a>
         <a href="#" css={styles.link} target="blank">
            <p css={styles.subTitle}>Инста</p>
         </a>
      </div>
   );
};

export default Footer;
