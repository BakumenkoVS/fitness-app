import "./App.styles.ts";
import { styles } from "./App.styles";
import Header from "../Header/Header";
import Promo from '../Promo/Promo';

function App() {
   return (
      <div css={styles.box}>
         <Header />
         <Promo />
      </div>
   );
}

export default App;
