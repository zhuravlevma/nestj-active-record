import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../dal/orders.repository';
import { Order } from 'src/delivery/__models__/orders.model';

@Injectable()
export class FindOneOrderService {
  constructor(private ordersRepository: OrdersRepository) {}

  findOne(id: string): Promise<Order | null> {
    return this.ordersRepository.findOrderByIdWithDeliveryman(id);
  }
}
