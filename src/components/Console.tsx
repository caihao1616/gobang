import * as React from "react";
import {ActionCreators as UndoActionCreators} from "redux-undo"
import {restart} from "../actions"
import {connect} from "react-redux"
import {RootStateWithHistory} from "../store"
import * as styles from "../styles/Console.css"

interface StateProps {
    undoable: boolean,
    redoable: boolean
}
const mapStateToProps = (state: RootStateWithHistory): StateProps => ({
    undoable: state.past.length > 0,
    redoable: state.future.length > 0
})

interface DispatchProps {
    restart: Function,
    undo: Function,
    redo: Function
}
const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
    restart: () => {
        dispatch(restart());
    },
    undo: () => {
        dispatch(UndoActionCreators.undo());
    },
    redo: () => {
        dispatch(UndoActionCreators.redo());
    }
})

type ConsoleProps = StateProps & DispatchProps

class Console extends React.Component<ConsoleProps, undefined> {
    restart = () => {
        this.props.restart();
    }

    undo = () => {
        this.props.undo();
    }

    redo = () => {
        this.props.redo();
    }

    render() {
        return (
            <div className={styles.console}>
                <button className={`${styles.button} pure-button`}  onClick={this.restart}>Restart</button>
                <button className={`${styles.button} pure-button`}  onClick={this.undo} disabled={!this.props.undoable}>Undo</button>
                <button className={`${styles.button} pure-button`}  onClick={this.redo} disabled={!this.props.redoable}>Redo</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Console);
