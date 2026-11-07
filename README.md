# Assignment 14 – TypeScript OOP

## Project structure

```text
Assignment14/
├── src/
│   ├── User.ts
│   ├── Admin.ts
│   ├── Note.ts
│   ├── NoteBook.ts
│   ├── Storage.ts
│   └── app.ts
├── package.json
└── tsconfig.json
```

## Run the project

1. Open this folder in VS Code.
2. Open the terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Run directly with ts-node:

   ```bash
   npm run dev
   ```

   Or compile and run:

   ```bash
   npm run build
   npm start
   ```

## UML relationships

- **Inheritance:** `Admin extends User`
- **Composition:** `NoteBook` contains `Note` objects.
- **Aggregation:** `User` stores references to multiple `NoteBook` objects.
- **Association:** each `Note` references its author (`User`).

`Storage<T>` is a generic class that can store values of any type.
