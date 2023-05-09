import { Injectable } from '@nestjs/common';
import { Order } from '../../__typeorm/orders.model';
import { OrdersRepository } from '../dal/orders.repository';

@Injectable()
export class FindAllOrdersService {
  constructor(private ordersRepository: OrdersRepository) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.findAllOrders();
  }
}
