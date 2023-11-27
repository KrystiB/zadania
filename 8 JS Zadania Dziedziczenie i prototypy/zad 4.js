function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.showInfo = function () {
    return `${this.title} napisana przez ${this.author}`;
}

const firstBook = new Book('Harry Potter', 'J.K. Rowling');

console.log(firstBook.showInfo());