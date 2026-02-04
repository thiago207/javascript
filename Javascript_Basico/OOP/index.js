

let book = {
    bookTitle: "JavaScript Basics",
    bookAuthor: "John Doe",
    bookPages: 250,
    bookChapters:  {
        chap1: "Introduction",
        chap2: "Variables and Data Types",
        chap3: "Functions",
        chap4: "Objects",
        chap5: "Arrays"
    },
    printBook: function(){
        console.log(`Title: ${this.bookTitle}
            Author: ${this.bookAuthor}
            Pages: ${this.bookPages}
            Chapters:
                1. ${this.bookChapters.chap1}
                2. ${this.bookChapters.chap2}
                3. ${this.bookChapters.chap3}
                4. ${this.bookChapters.chap4}
                5. ${this.bookChapters.chap5}
        `)
    }
}



console.log(book.printBook())
