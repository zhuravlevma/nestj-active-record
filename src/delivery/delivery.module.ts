import { Module } from '@nestjs/common';
import { AddOrderToDeliverymanService } from './deliveryman/services/add-order-to-deliveryman.service';
import { ChangeDeliverymansStatusService } from './deliveryman/services/change-deliverymans-status';
import { CreateDeliverymanService } from './deliveryman/services/create-deliveryman.service';
import { UpdateDeliverymansOrdersService } from './deliveryman/services/update-deliverymans-orders.service';
import { UpdateDeliverymansInfoService } from './deliveryman/services/update-deliverymans-info.service';
import { FindAllDeliverymansService } from './deliveryman/services/find-all-deliverymans';
import { DeliverymanRepository } from './deliveryman/dal/deliveryman.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deliveryman } from 'src/delivery/__models__/deliveryman.model';
import { OrdersController } from './orders/orders.controller';
import { Order } from './__models__/orders.model';
import { DeliverymanController } from './deliveryman/deliveryman.controller';
import { UpdateOrderService } from './orders/services/update-order.service';
import { OrdersRepository } from './orders/dal/orders.repository';
import { FindAllOrdersService } from './orders/services/find-all-orders.service';
import { FindOneOrderService } from './orders/services/find-one-order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Deliveryman])],
  controllers: [DeliverymanController, OrdersController],
  providers: [
    OrdersRepository,
    FindAllOrdersService,
    FindAllDeliverymansService,
    FindOneOrderService,
    AddOrderToDeliverymanService,
    ChangeDeliverymansStatusService,
    CreateDeliverymanService,
    UpdateDeliverymansOrdersService,
    UpdateDeliverymansInfoService,
    DeliverymanRepository,
    UpdateOrderService,
  ],
})
export class DeliveryModule {}
