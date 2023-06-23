export {
    Cell,
    Board,
    formObject,
    GameInfo
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

interface GameInfo {
    playerOneName: string,
    playerOneSelection: string,
    playerTwoName: string,
    playerTwoSelection: string,
    useAi: boolean,
    aiMode: string,
    winner: string,
    gameStatus: string,
}