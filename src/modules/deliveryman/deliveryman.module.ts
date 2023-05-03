import { Module } from '@nestjs/common';
import { AddOrderToDeliverymanService } from './services/add-order-to-deliveryman.service';
import { ChangeDeliverymansStatusService } from './services/change-deliverymans-status';
import { CreateDeliverymanService } from './services/create-deliveryman.service';
import { UpdateDeliverymansOrdersService } from './services/update-deliverymans-orders.service';
import { UpdateDeliverymansInfoService } from './services/update-deliverymans-info.service';
import { FindAllDeliverymansService } from './services/find-all-deliverymans';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { DeliverymanController } from './web/controllers/deliveryman.controller';

@Module({
  imports: [RepositoriesModule],
  controllers: [DeliverymanController],
  providers: [
    FindAllDeliverymansService,
    AddOrderToDeliverymanService,
    ChangeDeliverymansStatusService,
    CreateDeliverymanService,
    UpdateDeliverymansOrdersService,
    UpdateDeliverymansInfoService,
  ],
})
export class DeliverymanModule {}
