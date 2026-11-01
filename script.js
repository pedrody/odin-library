const myLibrary = [
    new Book("White Nights", "Fyodor Dostoevsky", "80", "Yes"),
    new Book("Crime and Punishment", "Fyodor Dostoevsky", "500", "No"),
    new Book("The Brothers Karamazov", "Fyodor Dostoevsky", "800", "No"),
    new Book("Love Is a Dog from Hell", "Charles Bukowski", "300", "No"),
    new Book("Post Office", "Charles Bukowski", "200", "Yes")
];

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
    const libraryTableBody = document.querySelector("#library-table > tbody");

    library.forEach(book => {
        const newBookRow = libraryTableBody.insertRow(-1);

        const title = newBookRow.insertCell(0);
        title.textContent = `${book.title}`;

        const author = newBookRow.insertCell(1);
        author.textContent = `${book.author}`;

        const pages = newBookRow.insertCell(2);
        pages.textContent = `${book.pages}`;

        const read = newBookRow.insertCell(3);
        read.textContent = `${book.read}`;
    });
}

displayLibrary(myLibrary);
