import * as React from "React";
import {connect} from "react-redux";
import {CellEnum} from "../constants";
import {RootStateWithHistory} from "../store";
import * as styles from "../styles/Header.css";

interface HeaderProps {
    turn: CellEnum
}
const mapStateToProps = (state: RootStateWithHistory): HeaderProps => ({
    turn: state.present.turn
});

class Header extends React.Component<HeaderProps, undefined> {
    render() {
        let pieceColorClassName = (this.props.turn == CellEnum.White) ? styles.white : styles.black;
        let pieceClassName = `${styles.piece} ${pieceColorClassName}`;

        return  (
            <div className={styles.header}>
                <div className={styles.label}>Current Turn:</div>
                <div className={pieceClassName}></div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Header);