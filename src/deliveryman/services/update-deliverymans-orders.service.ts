import { Injectable } from '@nestjs/common';
import { DeliverymanRepository } from '../dal/deliveryman.repository';
import { Deliveryman } from '../../__typeorm/deliveryman.model';
import { UpdateDeliverymansOrdersDto } from 'src/deliveryman/web/dtos/update-deliverymans-orders.dto';

@Injectable()
export class UpdateDeliverymansOrdersService {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async updateDeliverymansOrdersDto(
    deliverymanId: string,
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
