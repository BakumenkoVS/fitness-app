import { createStyles } from "../../types/emotion-styles";
export const styles = createStyles({
   box: {
      display: "flex",
      flexDirection: "column",
   },
   inputLabel:{
    fontWeight: '400',
    fontSize: '10px',
    lineHeight: '12px',
    color: '#a0a0a0',
    margin: '20px 0 0 0',
    paddingBottom: '5px',
   },
   input: {
      padding: "0",
      width: "250px",
      height: "30px",
      border: "0",
      fontWeight: "300",
      fontSize: "20px",
      lineHeight: "130%",
      letterSpacing: "0.02em",
      outline: "0",
      borderBottom: "1px solid #e8e8e8",
      "&: focus": {
         borderColor: "#000",
      },
   },
});
