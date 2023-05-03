import { Injectable } from '@nestjs/common';
import { Order } from '../../../models/orders.model';
import { DeliverymanRepository } from '../../../repositories/deliveryman.repository';
import { Deliveryman } from '../../../models/deliveryman.model';
import { CreateOrderDto } from 'src/dtos/create-order.dto';

@Injectable()
export class AddOrderToDeliverymanService {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async addOrderToDeliveryman(
    deliverymanId: number,
    createOrderDto: CreateOrderDto,
  ): Promise<Deliveryman> {
    try {
      const deliverymanWithOrders =
        await this.deliverymanRepository.findDeliverymanByIdWithOrders(
          deliverymanId,
        );

      deliverymanWithOrders.addOrder(
        Order.create(createOrderDto.name, createOrderDto.description),
      );

      return await this.deliverymanRepository.save(deliverymanWithOrders);
    } catch (error) {
      return error.message;
    }
  }
}
