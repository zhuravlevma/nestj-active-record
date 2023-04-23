import { Repository } from 'typeorm';
import { Order } from './orders.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  findOne(id: number): Promise<Order | null> {
    return this.ordersRepository.findOneBy({ id });
  }

  create(user: Order) {
    return this.ordersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.ordersRepository.delete(id);
  }
}
