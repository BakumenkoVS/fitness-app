import { createStyles } from "../../types/emotion-styles";

export const styles = createStyles({
   box: {},
   title: {
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "29px",
      margin: "40px 0 0 0",
      textAlign: "center",
   },
   inputForm: {
      marginTop: "30px",
      width: "100%",
   },
   submitButton: {
      width: "100%",
      backgroundColor: "#000",
      color: "white",
      border: "0",
      minHeight: "45px",
      margin: "200px 0 0",
      padding: "0",
      cursor: "pointer",
      opacity: "1",
      transition: "opacity linear 0.5s",

      "&: hover": {
         opacity: "0.6",
      },
      "&: disabled": {
         backgroundColor: "gray",
      },
   },
   error: {
      fontWeight: "400",
      fontSize: "10px",
      lineHeight: "12px",
      color: "#ff4062",
      display: "block",
      position: "absolute",
      padding: "6px 0 6px",
      marginBottom: "10px",
   },
});
