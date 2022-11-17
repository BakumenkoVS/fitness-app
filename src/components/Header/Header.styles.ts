import { createStyles } from "../../types/emotion-styles";

export const styles = createStyles({
   box: {
      display: "flex",
      justifyContent: "end",
      width: "100%",
      border: "1px red solid",
      maxWidth: "320px",
   },
   img: {
      width: "20px",
      height: "20px",
      cursor: "pointer",
   },
   button: {
      border: "1px",
      backgroundColor: "red",
      borderRadius: "5px",
      textDecoration: "none",
   },
});
