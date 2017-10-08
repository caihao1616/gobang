import * as React from "React";
import Grid from "./Grid";
import Panel from "./Panel";
import * as styles from "../styles/Board.css";

const Board = () => (
    <div className={styles.board}>
        <Grid />
        <Panel />
    </div>
)

export default Board;