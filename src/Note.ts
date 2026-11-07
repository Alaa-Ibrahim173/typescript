import type { User } from "./User";

export class Note {
    public Id: number;
    public title: string;
    public content: string;
    public userId: User;

    constructor(Id: number, title: string, content: string, userId: User) {
        this.Id = Id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    preview(): string {
        const previewLength = 50;
        return this.content.length > previewLength
            ? this.content.slice(0, previewLength) + "..."
            : this.content;
    }
}
