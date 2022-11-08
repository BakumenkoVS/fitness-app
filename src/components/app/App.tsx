import "./App.styles.ts";
import { styles } from "./App.styles";
import Main from "../Main/Main";
import { Route, Routes } from "react-router-dom";

function App() {
   return (
      <div css={styles.box}>
         <Routes>
            <Route path="/" element={<Main />} />
         </Routes>
      </div>
   );
}

export default App;
