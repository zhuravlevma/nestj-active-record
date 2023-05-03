import { Module } from '@nestjs/common';
import { FindAllOrdersService } from './services/find-all-orders.service';
import { FindOneOrderService } from './services/find-one-order.service';
import { UpdateOrderService } from './services/update-order.service';
import { OrdersController } from './web/controllers/orders.controller';
import { RepositoriesModule } from 'src/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [OrdersController],
  providers: [FindAllOrdersService, FindOneOrderService, UpdateOrderService],
})
export class AccountingOrderModule {}
