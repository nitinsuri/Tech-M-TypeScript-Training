export class Car {
  private brand: string;
  public model: string;
  readonly year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  public getDetails(): string {
    return `${this.brand} : ${this.model} : ${this.year}`
  }
}