import { Injectable } from '@nestjs/common';
import { DeliverymanRepository } from '../dal/deliveryman.repository';
import { Deliveryman } from '../../__models__/deliveryman.model';
import { CreateOrderDto } from 'src/delivery/deliveryman/dtos/create-order.dto';
import { Order } from 'src/delivery/__models__/orders.model';

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
