export {
    bookInterface,
    Book
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {v4 as uuidv4} from 'uuid';

interface bookInterface {
    id: string
    author: string
    pages: number | null
    readStatus: boolean
    title: string
    topic: string
    cover: string | null
}


class Book implements bookInterface {
    id: string
    author: string
    pages: null | number
    readStatus: boolean
    title: string
    topic: string
    cover: string | null
    assignId(){
        this.id = uuidv4()
    }
    resetBook(){
        this.readStatus = false
        this.topic = ""
        this.cover = ""
        this.title = ""
        this.id = ""
        this.author = ""
        this.pages = null
    }
    constructor(author: string,
                pages: number | null,
                readStatus: boolean,
                title: string,
                topic: string,
                cover: string
    ) {
        this.id = ""
        this.author = author
        this.pages = pages
        this.readStatus = readStatus
        this.title = title
        this.topic = topic
        this.cover = cover
    }
}