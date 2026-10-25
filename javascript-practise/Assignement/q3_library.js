class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            return `Successfully issued "${this.title}"`;
        }
        return `"${this.title}" is already issued.`;
    }

    returnBook() {
        this.isIssued = false;
        return `Returned "${this.title}"`;
    }
}

const library = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "12345"),
    new Book("1984", "George Orwell", "67890"),
    new Book("To Kill a Mockingbird", "Harper Lee", "11223")
];

console.log(library.find(b => b.ISBN === "12345").issueBook());

console.log("--- Available Books ---");
library.filter(b => !b.isIssued).forEach(b => console.log(`- ${b.title} by ${b.author}`));