import { Injectable } from '@nestjs/common';
import { DeliverymanRepository } from '../dal/deliveryman.repository';
import { Deliveryman } from '../../__models__/deliveryman.model';
import { UpdateDeliverymansOrdersDto } from 'src/delivery/deliveryman/dtos/update-deliverymans-orders.dto';

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
