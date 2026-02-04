function CreateBook(title, author, pages) {
    this.bookTitle = title,
    this.bookAuthor = author,
    this.bookPages = pages,
    this.printBook = function(){
        console.log(`Title: ${this.bookTitle}, Author: ${this.bookAuthor}, Pages: ${this.bookPages}`)
        }   
    }
    
const book1 = new CreateBook('Nada pode me ferir', 'David Goggins', 312)
const book2 = new CreateBook('O poder do hábito', 'Charles Duhigg', 408)


book1.printBook()
book2.printBook()

console.log(Math.min(10, 5, 20, 3, 8))   