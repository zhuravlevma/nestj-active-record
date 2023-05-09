import { Module } from '@nestjs/common';
import { FindAllOrdersService } from './services/find-all-orders.service';
import { FindOneOrderService } from './services/find-one-order.service';
import { UpdateOrderService } from './services/update-order.service';
import { OrdersController } from './web/orders.controller';
import { OrdersRepository } from './dal/orders.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deliveryman } from 'src/__typeorm/deliveryman.model';
import { Order } from 'src/__typeorm/orders.model';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Deliveryman])],
  controllers: [OrdersController],
  providers: [
    FindAllOrdersService,
    FindOneOrderService,
    UpdateOrderService,
    OrdersRepository,
  ],
})
export class OrdersModule {}
