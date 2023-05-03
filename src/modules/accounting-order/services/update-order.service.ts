import { Injectable } from '@nestjs/common';
import { Order } from '../../../models/orders.model';
import { OrdersRepository } from '../../../repositories/orders.repository';
import { UpdateOrderDto } from 'src/dtos/update-order.dto';

@Injectable()
export class UpdateOrderService {
  constructor(private ordersRepository: OrdersRepository) {}

  async updateOrder(
    orderId: number,
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
