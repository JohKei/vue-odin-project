import {ComputedRef} from "vue";

export {
    bookInterface,
    Book,
    Cell,
    Board
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {v4 as uuidv4} from 'uuid';

// bookInterface && Book -> odinLibrary Project
interface bookInterface {
    id: undefined | string
    author: string
    pages: number | null
    readStatus: boolean
    title: string
    topic: string
    cover: string
}


class Book implements bookInterface {
    id: undefined | string
    author: string
    pages: null | number
    readStatus: boolean
    title: string
    topic: string
    cover: string

    assignId() {
        this.id = uuidv4()
    }

    constructor(author: string,
                pages: number | null,
                readStatus: boolean,
                title: string,
                topic: string,
                cover: string
    ) {
        this.id = undefined
        this.author = author
        this.pages = pages
        this.readStatus = readStatus
        this.title = title
        this.topic = topic
        this.cover = cover
    }
}

// Cell && Board -> odinTicTacToe
interface Cell {
    addToken: (player: string) => void
    getValue: ComputedRef<string>
}
type Board<T extends Cell> = Array<T>