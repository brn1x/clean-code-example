import { PostgresOrdersRepository } from "./repositories/postgres/postgres-orders-repository";
import { SubmitOrder } from "./use-cases/submit-order";

const submitOrder = new SubmitOrder(
  new PostgresOrdersRepository(),
);

submitOrder.execute({ costumerDocument: '12345678900', total: 100 });
