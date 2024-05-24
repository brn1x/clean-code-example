import { Order } from "../domain/purchases/order";
import { OrdersRepository } from "../repositories/orders-repository";

interface SubmitOrderRequest {
  costumerDocument: string;
  total: number;
}

export class SubmitOrder {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({ costumerDocument, total }: SubmitOrderRequest) {
    const order = new Order(total, costumerDocument);

    await this.ordersRepository.create(order);
  }
}