import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/delivery/__models__/orders.model';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  findAllOrders(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  findOrderByIdWithDeliveryman(orderId: string): Promise<Order> {
    return this.ordersRepository.findOne({
      where: {
        id: orderId,
      },
      relations: {
        deliveryman: true,
      },
    });
  }

  async save(order: Order) {
    return this.ordersRepository.save(order);
  }
}
