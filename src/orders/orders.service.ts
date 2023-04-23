import { Injectable } from '@nestjs/common';
import { Order } from './orders.model';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dtos/request/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private usersRepository: OrdersRepository) {}

  findAll(): Promise<Order[]> {
    return this.usersRepository.findAll();
  }

  findOne(id: number): Promise<Order | null> {
    return this.usersRepository.findOne(id);
  }

  create(createUserDto: CreateOrderDto) {
    const order = new Order();
    order.name = createUserDto.name;
    order.description = createUserDto.description;
    return this.usersRepository.create(order);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.remove(id);
  }
}
