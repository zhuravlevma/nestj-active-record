import { Injectable } from '@nestjs/common';
import { Order } from '../../../models/orders.model';
import { OrdersRepository } from '../../../repositories/orders.repository';

@Injectable()
export class FindAllOrdersService {
  constructor(private ordersRepository: OrdersRepository) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.findAllOrders();
  }
}
