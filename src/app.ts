import { User } from "./User";
import { Admin } from "./Admin";
import { Note } from "./Note";
import { NoteBook } from "./NoteBook";
import { Storage } from "./Storage";

// Create a user
const user1 = new User(
    1,
    "Alaa",
    "alaa@example.com",
    "123456",
    "01000000000",
    28
);

user1.displayInfo();

// Create a notebook and associate it with the user (Aggregation)
const notebook1 = new NoteBook();
user1.addNotebook(notebook1);

// Create a note with its author (Association)
const note1 = new Note(
    1,
    "My first note",
    "This is my first note using TypeScript OOP. It demonstrates the Note class.",
    user1
);

// Add the note to the notebook (Composition)
notebook1.addNote(note1);

console.log("Note preview:", note1.preview());
console.log("All notes:", notebook1.getAllNotes());

// Create an admin (Inheritance)
const admin1 = new Admin(
    2,
    "Admin",
    "admin@example.com",
    "admin123",
    "01100000000",
    35
);

const adminNote = new Note(2, "Admin note", "A note managed by the admin.", admin1);
admin1.manageNotes(notebook1, "add", adminNote);

// Demonstrate Generic Storage<T>
const noteStorage = new Storage<Note>();
noteStorage.addItem(note1);
noteStorage.addItem(adminNote);
console.log("Stored notes:", noteStorage.getAllItems());
