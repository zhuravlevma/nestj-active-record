import { Injectable } from '@nestjs/common';
import { Order } from '../../../models/orders.model';
import { OrdersRepository } from '../../../repositories/orders.repository';

@Injectable()
export class FindOneOrderService {
  constructor(private ordersRepository: OrdersRepository) {}

  findOne(id: number): Promise<Order | null> {
    return this.ordersRepository.findOrderByIdWithDeliveryman(id);
  }
}
