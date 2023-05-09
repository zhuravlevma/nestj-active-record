import { Injectable } from '@nestjs/common';
import { DeliverymanRepository } from '../dal/deliveryman.repository';
import { Deliveryman } from '../../__typeorm/deliveryman.model';
import { UpdateDeliverymansInfoDto } from 'src/deliveryman/web/dtos/update-deliverymans-info.dto';

@Injectable()
export class UpdateDeliverymansInfoService {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async updateDeliverymansInfo(
    deliverymanId: string,
    updateDeliveryManDto: UpdateDeliverymansInfoDto,
  ): Promise<Deliveryman> {
    try {
      const deliverymanWithOrders =
        await this.deliverymanRepository.findDeliverymanByIdWithOrders(
          deliverymanId,
        );

      updateDeliveryManDto.firstName !== undefined ??
        (deliverymanWithOrders.firstName = updateDeliveryManDto.firstName);

      updateDeliveryManDto.lastName !== undefined ??
        (deliverymanWithOrders.lastName = updateDeliveryManDto.lastName);

      return await this.deliverymanRepository.save(deliverymanWithOrders);
    } catch (error) {
      return error.message;
    }
  }
}
