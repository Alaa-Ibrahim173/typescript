import { User } from "./User";
import type { Note } from "./Note";
import type { NoteBook } from "./NoteBook";

export class Admin extends User {
    manageNotes(notebook: NoteBook, action: "add" | "remove", note: Note): void {
        if (action === "add") {
            notebook.addNote(note);
            console.log("Note added successfully.");
        } else {
            notebook.removeNote(note.Id);
            console.log("Note removed successfully.");
        }
    }
}
