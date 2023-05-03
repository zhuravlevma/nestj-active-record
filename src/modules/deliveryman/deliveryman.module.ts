import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../../models/orders.model';
import { DeliverymanController } from '../../controllers/deliveryman.controller';
import { DeliverymanRepository } from '../../repositories/deliveryman.repository';
import { Deliveryman } from '../../models/deliveryman.model';
import { AddOrderToDeliverymanService } from './services/add-order-to-deliveryman.service';
import { ChangeDeliverymansStatusService } from './services/change-deliverymans-status';
import { CreateDeliverymanService } from './services/create-deliveryman.service';
import { UpdateDeliverymansOrdersService } from './services/update-deliverymans-orders.service';
import { UpdateDeliverymansInfoService } from './services/update-deliverymans-info.service';
import { OrdersController } from 'src/controllers/orders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Deliveryman])],
  controllers: [OrdersController, DeliverymanController],
  providers: [
    DeliverymanRepository,
    AddOrderToDeliverymanService,
    ChangeDeliverymansStatusService,
    CreateDeliverymanService,
    UpdateDeliverymansOrdersService,
    UpdateDeliverymansInfoService,
  ],
})
export class DeliverymanModule {}
