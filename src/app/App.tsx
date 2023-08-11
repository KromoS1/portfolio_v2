import styles from "./App.module.scss";
import { Routing } from "./providers";

function App() {
  return (
    <>
      <div className={styles.App}>
        <div className={styles.Contents}>
          <Routing />
        </div>
      </div>
    </>
  );
}

export default App;
