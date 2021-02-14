export abstract class ReferenceItem {
  // title: string;
  // year: number;

  // constructor(newTitle: string, newYear: number) {
  //   console.log('Creating a new ReferenceItem...');
  //   this.title = newTitle;
  //   this.year = newYear;
  // }

  #id: number;
  private _publisher: string;

  static department: string = 'Classic';

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  constructor(id: number, public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
    this.#id = id;
  }

  getID(): number {
    return this.#id;
  }

  printItem(): void {
    console.log(`${this.title} was published ${this.year}`);
    console.log(ReferenceItem.department);
  }

  abstract printCitation(): void;
}