import { Injectable } from '@nestjs/common';
import { Order } from '../../__typeorm/orders.model';
import { OrdersRepository } from '../dal/orders.repository';
import { UpdateOrderDto } from 'src/orders/web/dtos/update-order.dto';

@Injectable()
export class UpdateOrderService {
  constructor(private ordersRepository: OrdersRepository) {}

  async updateOrder(
    orderId: string,
    updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    const order = await this.ordersRepository.findOrderByIdWithDeliveryman(
      orderId,
    );

    updateOrderDto.isActive !== undefined ??
      order.changeStatus(updateOrderDto.isActive);

    updateOrderDto.description !== undefined ??
      order.addInfoToDescription(updateOrderDto.description);

    return this.ordersRepository.save(order);
  }
}
