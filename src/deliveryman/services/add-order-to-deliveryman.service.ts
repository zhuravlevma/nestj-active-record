import { Injectable } from '@nestjs/common';
import { Order } from '../../__typeorm/orders.model';
import { DeliverymanRepository } from '../dal/deliveryman.repository';
import { Deliveryman } from '../../__typeorm/deliveryman.model';
import { CreateOrderDto } from 'src/deliveryman/web/dtos/create-order.dto';

@Injectable()
export class AddOrderToDeliverymanService {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async addOrderToDeliveryman(
    deliverymanId: string,
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
