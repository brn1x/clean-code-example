export class Order {
  public createdAt: Date;

  constructor(public total: number, public costumerDocument: string) {
    this.createdAt = new Date();
  }
}

