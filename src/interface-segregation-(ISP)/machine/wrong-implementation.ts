interface IDocument {
  title: string;
  text: string;
  createdAt: Date;
}

interface IMachine {
  print(payload: IDocument): void;
  fax(payload: IDocument): void;
  scan(payload: IDocument): void;
}

class Printer implements IMachine {
  print(): void {
    console.log("Machine is printing");
  }

  scan(): void {
    console.log("Machine is scanning");
  }

  fax(): void {
    console.log("Machine is faxing");
  }
}
