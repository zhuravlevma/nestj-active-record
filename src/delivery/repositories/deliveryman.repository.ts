import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Deliveryman } from '../models/deliveryman.model';

@Injectable()
export class DeliverymanRepository {
  constructor(
    @InjectRepository(Deliveryman)
    private deliveryMan: Repository<Deliveryman>,
  ) {}

  createDeliveryMan(deliveryMan: Deliveryman): Promise<Deliveryman> {
    return this.deliveryMan.save(deliveryMan);
  }

  findAllDeliveryMans(): Promise<Deliveryman[]> {
    return this.deliveryMan.find();
  }

  findDeliverymanByIdWithOrders(deliverymanId: number): Promise<Deliveryman> {
    return this.deliveryMan.findOne({
      where: {
        id: deliverymanId,
      },
      relations: {
        orders: true,
      },
    });
  }

  async save(deliveryMan: Deliveryman) {
    const saved = await this.deliveryMan.save(deliveryMan);
    return saved;
  }
}
