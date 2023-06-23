
export {
    Cell,
    Board,
    formObject,
    GameHandler,
    I,
    BoardObj,
    BoardLog
}

import {ComputedRef} from "vue";

interface Cell {
    addToken: (player: string) => void
    getValue: ComputedRef<string>
}

type Board<T extends Cell> = Array<T>

interface formObject {
    playerOneName: string,
    playerOneSelection: string,
    enemy: string,
    playerTwoName: string,
    disablePlayerTwo: boolean,
    aiMode: string,
    disableAi: boolean
}


interface GameHandler {
    endModal: boolean,
    possibleEnds: [number[], number[], number[], number[], number[], number[], number[], number[]],
    whoisTurn : string,
    board : undefined | string[],
    boardObj: BoardObj,

}
type BoardObj =  {
    0: string,
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
    7: string,
    8: string
}

type I = BoardObj[keyof BoardObj]
type BoardLog = (ComputedRef<string> | undefined | string)[]