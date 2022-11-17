import "./App.styles.ts";
import { styles } from "./App.styles";
import Main from "../Main/Main";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";

function App() {
   return (
      <div css={styles.box}>
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<Login />} />
         </Routes>
      </div>
   );
}

export default App;
