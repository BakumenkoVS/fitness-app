import { createStyles } from "../../types/emotion-styles";

export const styles = createStyles({
   box: {
      display: "flex",

      width: "100%",
      backgroundColor: "#FFA07A",
      border: "1px solid red",
      flexDirection: "column",
      alignItems: "center",
   },
   title: {
      margin: "0",
      fontSize: "17px",
      fontWeight: "normal",
   },
   subTitle: {
      margin: "5px 0 0 0",
      fontSize: "11px",
   },
   link: {
      textDecoration: "none",
      color: "black",
      cursor: "pointer",
   },
});
