import { Injectable } from '@nestjs/common';
import { DeliverymanRepository } from '../dal/deliveryman.repository';
import { Deliveryman } from '../../__typeorm/deliveryman.model';

@Injectable()
export class FindAllDeliverymansService {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async findAllDeliverymans(): Promise<Deliveryman[]> {
    try {
      return await this.deliverymanRepository.findAllDeliveryMans();
    } catch (error) {
      return error.message;
    }
  }
}
