import type { Note } from "./Note";

export class NoteBook {
    public notes: Note[] = [];

    addNote(note: Note): void {
        this.notes.push(note);
    }

    removeNote(id: number): void {
        this.notes = this.notes.filter(note => note.Id !== id);
    }

    getAllNotes(): Note[] {
        return [...this.notes];
    }
}
