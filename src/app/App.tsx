import { BrowserRouter } from "react-router-dom";

import { NavBar } from "@/modules";

import styles from "./App.module.scss";
import { Routing } from "./providers";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <div className={styles.Contents}>
          <NavBar />
          <Routing />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
