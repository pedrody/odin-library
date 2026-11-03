const myLibrary = [
    new Book("White Nights", "Fyodor Dostoevsky", 80, true),
    new Book("Crime and Punishment", "Fyodor Dostoevsky", 500, false),
    new Book("The Brothers Karamazov", "Fyodor Dostoevsky", 800, false),
    new Book("Love Is a Dog from Hell", "Charles Bukowski", 300, false),
    new Book("Post Office", "Charles Bukowski", 200, true)
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

    libraryTableBody.replaceChildren();

    // For each book create a row
    library.forEach(book => {
        const newBookRow = libraryTableBody.insertRow(-1);

        const title = newBookRow.insertCell(0);
        title.textContent = book.title;

        const author = newBookRow.insertCell(1);
        author.textContent = book.author;

        const pages = newBookRow.insertCell(2);
        pages.textContent = book.pages;

        const read = newBookRow.insertCell(3);
        read.textContent = book.read ? "Yes" : "No";

        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.textContent = "❌";
        deleteBookBtn.classList.add("delete-book-btn");
        deleteBookBtn.dataset.bookId = book.id;
        deleteBookBtn.addEventListener("click", deleteEvent)

        const buttonsCell = document.createElement("td");
        buttonsCell.appendChild(deleteBookBtn);
        newBookRow.appendChild(buttonsCell);
    });
}

const deleteEvent = (event) => {
    const bookId = event.currentTarget.dataset.bookId;
    const bookIndexToDelete = myLibrary.findIndex(book => book.id === bookId);
    myLibrary.splice(bookIndexToDelete, 1);

    displayLibrary(myLibrary);
}

const addNewBookDialog = document.querySelector("dialog");
const newBookForm = document.querySelector("form");

newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(newBookForm);

    addBookToLibrary(
        formData.get("title"),
        formData.get("author"),
        Number(formData.get("pages")),
        formData.get("read") !== null,
    );

    displayLibrary(myLibrary);

    addNewBookDialog.close();
});

addNewBookDialog.addEventListener("close", () => {
    newBookForm.reset();
});

displayLibrary(myLibrary);
