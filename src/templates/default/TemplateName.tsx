import React, { FC } from "react";
import { TemplateNameProps } from "./types";
import { styles } from "./TemplateName.styles";

const TemplateName: FC<TemplateNameProps> = () => {
   return (
      <div css={styles.box}>
         <div>TemplateName</div>
      </div>
   );
};

export default TemplateName;
