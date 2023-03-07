import styles from "./App.module.scss";
import { useState } from "react";

function App() {
  const [shouldShowText, setShouldShowText] = useState(false);
  return (
    <div className={styles.App}>
      <button onClick={() => setShouldShowText(!shouldShowText)}>
        Toggle text
      </button>
      {shouldShowText && <p>This is the JasonReactBoilerplate.</p>}
    </div>
  );
}

export default App;
