abstract class Document {
    public abstract open(): void;
    public abstract save(): void;
}



class TextDocument extends Document {
    private content: string;

    constructor(content: string) {
        super();
        this.content = content;
    }

    public open(): void {
        console.log("Opening text document with content: " + this.content);
    }

    public save(): void {
        console.log("Saving text document.");
    }
}

// modify SpreadsheetDocument to introduce behavior that violates LSP. Specifically, 
//  we'll make SpreadsheetDocument throw an error when attempting to save, which isn't consistent with the Document interface contract.

class SpreadsheetDocument extends Document {
    private data: string[][];

    constructor(data: string[][]) {
        super();
        this.data = data;
    }

    public open(): void {
        console.log("Opening spreadsheet document with data: " + JSON.stringify(this.data));
    }

    public save(): void {
        throw new Error("Spreadsheet documents cannot be saved.");
    }
}




