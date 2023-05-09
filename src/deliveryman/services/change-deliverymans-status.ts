import { Injectable } from '@nestjs/common';
import { DeliverymanRepository } from '../dal/deliveryman.repository';
import { Deliveryman } from '../../__typeorm/deliveryman.model';
import { ChangeDeliverymansStatusDto } from '../web/dtos/change-deliverymans-status.dto';

@Injectable()
export class ChangeDeliverymansStatusService {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async changeDeliverymansStatus(
    deliverymanId: string,
    changeDeliverymansStatusDto: ChangeDeliverymansStatusDto,
  ): Promise<Deliveryman> {
    try {
      const deliverymanWithOrders =
        await this.deliverymanRepository.findDeliverymanByIdWithOrders(
          deliverymanId,
        );
      deliverymanWithOrders.changeStatus(changeDeliverymansStatusDto.isActive);

      return await this.deliverymanRepository.save(deliverymanWithOrders);
    } catch (error) {
      return error.message;
    }
  }
}
