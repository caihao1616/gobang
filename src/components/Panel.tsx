import * as React from "React";
import Cell from "./Cell";
import {CellEnum} from "../constants";
import {connect} from "react-redux";
import {RootStateWithHistory} from "../store";
import * as styles from "../styles/Panel.css"

interface PanelProps {
    cells: Array<CellEnum>
}
const mapStateToProps = (state: RootStateWithHistory): PanelProps => ({
    cells: state.present.cells
})

class Panel extends React.Component<PanelProps, undefined> {
    render() {
        let cells = this.props.cells.map((cell: CellEnum, index: number) => {
            return <Cell key={index} index={index} value={cell} />
        });
        return <div className={styles.panel}>{cells}</div>;
    }
}

export default connect(mapStateToProps)(Panel)

