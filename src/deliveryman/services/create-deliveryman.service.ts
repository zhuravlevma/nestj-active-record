import { Injectable } from '@nestjs/common';
import { DeliverymanRepository } from '../dal/deliveryman.repository';
import { Deliveryman } from '../../__typeorm/deliveryman.model';
import { CreateDeliverymanDto } from 'src/deliveryman/web/dtos/create-deliveryman.dto';

@Injectable()
export class CreateDeliverymanService {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  createDeliveryMan(
    createDeliveryManDto: CreateDeliverymanDto,
  ): Promise<Deliveryman> {
    return this.deliverymanRepository.createDeliveryMan(
      Deliveryman.create(
        createDeliveryManDto.firstName,
        createDeliveryManDto.lastName,
      ),
    );
  }
}
