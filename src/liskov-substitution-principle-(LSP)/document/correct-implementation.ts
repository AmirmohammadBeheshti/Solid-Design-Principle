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

// both TextDocument and SpreadsheetDocument adhere to the contract specified by the Document class, 
// and the handleDocument function can operate correctly on instances of both classes

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
        console.log("Saving spreadsheet document.");
    }
}




