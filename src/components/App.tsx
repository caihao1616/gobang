import * as React from "React"
import Header from "./Header";
import Board from "./Board"
import Console from "./Console"
import * as styles from "../styles/App.css";

const App = () => (
    <div className={styles.app}>
        <Header />
        <Board />
        <Console />
    </div>
)

export default App;