const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("Use the new keyword to create a book.");
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayLibrary(library) {
    library.forEach(book => {
        const para = document.createElement("p");
        para.textContent = `Title: ${book.title}, 
                            Author: ${book.author}, 
                            Pages: ${book.pages}, 
                            Read: ${book.read}`;
        document.body.append(para);
    });
}

for (let i = 1; i <= 10; i++) {
    addBookToLibrary(
        `Book ${i}`,
        `Author ${i}`,
        `${i}00`,
        "not read yet");
}

displayLibrary(myLibrary);
