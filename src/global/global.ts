export {
    Book
}
interface Book {
    id: string
    author: string
    pages: number | null
    readStatus: boolean
    title: string
    topic: string
    cover: string | null
}

// I'm using the Book interface from instead of this class

// class Book {
//   id: string
//   author: string
//   pages: number
//   readStatus: boolean
//   title: string
//   topic: string
//   cover: string | null
//
//   constructor(author: string,
//               pages: number,
//               readStatus: boolean,
//               title: string
//               topic: string,
//               cover: string
//   ) {
//     this.id = uuidv4()
//     this.author = author
//     this.pages = pages
//     this.readStatus = readStatus
//     this.title = title
//     this.topic = topic
//     this.cover = cover
//   }
// }