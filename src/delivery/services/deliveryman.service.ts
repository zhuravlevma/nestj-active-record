import { Injectable } from '@nestjs/common';
import { Order } from '../models/orders.model';
import { CreateOrderDto } from '../dtos/request/create-order.dto';
import { DeliverymanRepository } from '../repositories/deliveryman.repository';
import { Deliveryman } from '../models/deliveryman.model';
import { CreateDeliveryManDto } from '../dtos/create-deliveryman.dto';
import { UpdateDeliverymanDto } from '../dtos/request/update-deliveryman.dto';
import { UpdateDeliverymansOrdersDto } from '../dtos/request/update-deliverymans-orders.dto';

@Injectable()
export class DeliverymanService {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  findAll(): Promise<Deliveryman[]> {
    return this.deliverymanRepository.findAllDeliveryMans();
  }

  addDeliveryMan(
    createDeliveryManDto: CreateDeliveryManDto,
  ): Promise<Deliveryman> {
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
  ): Promise<Deliveryman> {
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

  async updateDeliveryman(
    deliverymanId: number,
    updateDeliveryManDto: UpdateDeliverymanDto,
  ): Promise<Deliveryman> {
    try {
      const deliverymanWithOrders =
        await this.deliverymanRepository.findDeliverymanByIdWithOrders(
          deliverymanId,
        );

      updateDeliveryManDto.isActive !== undefined ??
        deliverymanWithOrders.changeStatus(updateDeliveryManDto.isActive);

      updateDeliveryManDto.firstName !== undefined ??
        (deliverymanWithOrders.firstName = updateDeliveryManDto.firstName);

      updateDeliveryManDto.lastName !== undefined ??
        (deliverymanWithOrders.lastName = updateDeliveryManDto.lastName);

      return await this.deliverymanRepository.save(deliverymanWithOrders);
    } catch (error) {
      return error.message;
    }
  }

  async updateDeliverymansOrdersDto(
    deliverymanId: number,
    updateDeliverymansOrdersDto: UpdateDeliverymansOrdersDto,
  ): Promise<Deliveryman> {
    try {
      const deliverymanWithOrders =
        await this.deliverymanRepository.findDeliverymanByIdWithOrders(
          deliverymanId,
        );

      deliverymanWithOrders.addNewMessageToOrders(
        updateDeliverymansOrdersDto.description,
      );

      return await this.deliverymanRepository.save(deliverymanWithOrders);
    } catch (error) {
      return error.message;
    }
  }
}
