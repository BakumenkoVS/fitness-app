import { createStyles } from "../../types/emotion-styles";

export const styles = createStyles({
   box: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      maxWidth: "320px",
      fontFamily: ' "Inter", Arial, sans-serif',
      boxSizing: "border-box",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      WebkitTextSizeAdjust: "100%",
      MozTextSizeAdjust: "100%",
      minHeight: "100vh",
      margin: "0 auto",
   },
   conteiner: {
      border: "0.5px solid red",
      width: "100%",
      textAlign: "center",
   },
});
