interface IDocument {
  title: string;
  text: string;
  createdAt: Date;
}

interface IPrintMachine {
  print(payload: IDocument): void;
}

interface IFaxMachine {
  fax(payload: IDocument): void;
}

interface IScanMachine {
  scan(payload: IDocument): void;
}

class SimplePrinter implements IPrintMachine {
  print(): void {
    console.log("Machine is printing");
  }
}

class NormalPrinter implements IPrintMachine, IScanMachine {
  print(): void {
    console.log("Machine is printing");
  }

  scan(): void {
    console.log("Machine is scanning");
  }
}

class AdvancedPrinter implements IPrintMachine, IFaxMachine, IScanMachine {
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
