
export {
    Cell,
    Board,
    formObject,
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

