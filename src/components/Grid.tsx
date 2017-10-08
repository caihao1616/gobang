import * as React from "React";
import {PANEL_SIZE} from "../constants";
import * as styles from "../styles/Grid.css";

const squares: Array<React.ReactElement<HTMLElement>> = [];
for(let i = 0; i < Math.pow((PANEL_SIZE - 1), 2); i++){
    squares.push(<div key={i} className={styles.square}></div>);
}

const Grid = () => {
    return <div className={styles.grid}>{squares}</div>;
}

export default Grid;