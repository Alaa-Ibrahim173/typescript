import type { NoteBook } from "./NoteBook";

export class User {
    public Id: number;
    public name: string;
    public email: string;

    private Password: string;
    protected Phone: string;
private _age!: number;
    public notebooks: NoteBook[] = [];

    constructor(
    Id: number,
    name: string,
    email: string,
    Password: string,
    Phone: string,
    age: number
) {
    this.Id = Id;
    this.name = name;
    this.email = email;
    this.Password = Password;
    this.Phone = Phone;
    this.age = age;
}

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (!Number.isInteger(value) || value < 18 || value > 60) {
            throw new Error("Age must be an integer between 18 and 60.");
        }
        this._age = value;
    }

    displayInfo(): void {
        console.log("ID:", this.Id);
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Phone:", this.Phone);
        console.log("Age:", this.age);
        // Password is intentionally not displayed.
    }

    addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}
