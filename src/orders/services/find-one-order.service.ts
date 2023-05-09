import { Injectable } from '@nestjs/common';
import { Order } from '../../__typeorm/orders.model';
import { OrdersRepository } from '../dal/orders.repository';

@Injectable()
export class FindOneOrderService {
  constructor(private ordersRepository: OrdersRepository) {}

  findOne(id: string): Promise<Order | null> {
    return this.ordersRepository.findOrderByIdWithDeliveryman(id);
  }
}
