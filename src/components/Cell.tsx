import * as React from "react";
import {CellEnum} from "../constants";
import {connect} from "react-redux";
import {addPiece} from "../actions"
import {RootStateWithHistory} from "../store"
import * as styles from "../styles/Cell.css"

interface OwnProps {
    key: number,
    index: number,
    value: CellEnum
}

interface StateProps {
    turn: CellEnum
}
const mapStateToProps = (state: RootStateWithHistory): StateProps => ({
    turn: state.present.turn
})

interface DispatchProps {
    onClick: Function
}
const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
    onClick: (index: number, turn: CellEnum) => {
        dispatch(addPiece(index, turn))
    }
})

type CellProps = OwnProps & StateProps & DispatchProps

class Cell extends React.Component<CellProps, undefined> {
    clicked = () => {
        if(this.props.value == CellEnum.Blank){
            this.props.onClick(this.props.index, this.props.turn);
        }
    }

    render() {
        let pieceColorClassName = ''
        if(this.props.value == CellEnum.Black) pieceColorClassName = styles.black
        if(this.props.value == CellEnum.White) pieceColorClassName = styles.white
        let pieceClassName = `${styles.piece} ${pieceColorClassName}`

        return <div className={styles.cell} onClick={this.clicked}><div className={pieceClassName}></div></div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);