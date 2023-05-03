import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../../models/orders.model';
import { OrdersRepository } from '../../repositories/orders.repository';
import { DeliverymanController } from '../../controllers/deliveryman.controller';
import { Deliveryman } from '../../models/deliveryman.model';
import { FindAllOrdersService } from './services/find-all-orders.service';
import { FindOneOrderService } from './services/find-one-order.service';
import { UpdateOrderService } from './services/update-order.service';
import { OrdersController } from 'src/controllers/orders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Deliveryman])],
  controllers: [OrdersController, DeliverymanController],
  providers: [
    OrdersRepository,
    FindAllOrdersService,
    FindOneOrderService,
    UpdateOrderService,
  ],
})
export class AccountingOrderModule {}
