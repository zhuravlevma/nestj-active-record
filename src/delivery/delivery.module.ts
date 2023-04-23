import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './models/orders.model';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersRepository } from './repositories/orders.repository';
import { DeliverymanController } from './deliveryman.controller';
import { DeliverymanService } from './deliveryman.service';
import { DeliverymanRepository } from './repositories/deliveryman.repository';
import { Deliveryman } from './models/deliveryman.model';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Deliveryman])],
  controllers: [OrdersController, DeliverymanController],
  providers: [
    OrdersService,
    OrdersRepository,
    DeliverymanService,
    DeliverymanRepository,
  ],
})
export class DeliveryModule {}
