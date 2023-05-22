import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../dal/orders.repository';
import { Order } from 'src/delivery/__models__/orders.model';

@Injectable()
export class FindAllOrdersService {
  constructor(private ordersRepository: OrdersRepository) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.findAllOrders();
  }
}
