import { Module } from '@nestjs/common';
import { AddOrderToDeliverymanService } from './services/add-order-to-deliveryman.service';
import { ChangeDeliverymansStatusService } from './services/change-deliverymans-status';
import { CreateDeliverymanService } from './services/create-deliveryman.service';
import { UpdateDeliverymansOrdersService } from './services/update-deliverymans-orders.service';
import { UpdateDeliverymansInfoService } from './services/update-deliverymans-info.service';
import { FindAllDeliverymansService } from './services/find-all-deliverymans';
import { DeliverymanController } from './web/deliveryman.controller';
import { DeliverymanRepository } from './dal/deliveryman.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deliveryman } from 'src/__typeorm/deliveryman.model';
import { Order } from 'src/__typeorm/orders.model';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Deliveryman])],
  controllers: [DeliverymanController],
  providers: [
    FindAllDeliverymansService,
    AddOrderToDeliverymanService,
    ChangeDeliverymansStatusService,
    CreateDeliverymanService,
    UpdateDeliverymansOrdersService,
    UpdateDeliverymansInfoService,
    DeliverymanRepository,
  ],
})
export class DeliverymanModule {}
