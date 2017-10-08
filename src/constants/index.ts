import {RootState} from "../store"

enum CellEnum {
    Blank = "blank",
    Black = "black",
    White = "white"
}
const PANEL_SIZE = 15
const FIRST_TURN = CellEnum.Black

export {CellEnum, PANEL_SIZE, FIRST_TURN}
