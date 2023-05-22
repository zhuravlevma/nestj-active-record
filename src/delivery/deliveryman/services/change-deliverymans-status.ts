import { Injectable } from '@nestjs/common';
import { DeliverymanRepository } from '../dal/deliveryman.repository';
import { Deliveryman } from '../../__models__/deliveryman.model';
import { ChangeDeliverymansStatusDto } from '../dtos/change-deliverymans-status.dto';

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
