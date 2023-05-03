import { Injectable } from '@nestjs/common';
import { DeliverymanRepository } from '../../../repositories/deliveryman.repository';
import { Deliveryman } from '../../../models/deliveryman.model';
import { UpdateDeliverymansInfoDto } from 'src/modules/deliveryman/web/dtos/update-deliverymans-info.dto';

@Injectable()
export class UpdateDeliverymansInfoService {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async updateDeliverymansInfo(
    deliverymanId: number,
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
