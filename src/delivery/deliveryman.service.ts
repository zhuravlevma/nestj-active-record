import { Injectable } from '@nestjs/common';
import { Order } from './models/orders.model';
import { CreateOrderDto } from './dtos/request/create-order.dto';
import { DeliverymanRepository } from './repositories/deliveryman.repository';
import { Deliveryman } from './models/deliveryman.model';
import { CreateDeliveryManDto } from './dtos/request/create-deliveryman.dto';

@Injectable()
export class DeliverymanService {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  findAll(): Promise<Deliveryman[]> {
    return this.deliverymanRepository.findAllDeliveryMans();
  }

  addDeliveryMan(createDeliveryManDto: CreateDeliveryManDto) {
    return this.deliverymanRepository.createDeliveryMan(
      new Deliveryman(
        createDeliveryManDto.firstName,
        createDeliveryManDto.lastName,
      ),
    );
  }

  async addOrderToDeliveryman(
    deliverymanId: number,
    createOrderDto: CreateOrderDto,
  ) {
    try {
      const deliverymanWithOrders =
        await this.deliverymanRepository.findDeliverymanByIdWithOrders(
          deliverymanId,
        );

      const order = new Order(createOrderDto.name, createOrderDto.description);
      order.checkName();

      deliverymanWithOrders.addOrder(order);

      return await this.deliverymanRepository.save(deliverymanWithOrders);
    } catch (error) {
      return error.message;
    }
  }
}
