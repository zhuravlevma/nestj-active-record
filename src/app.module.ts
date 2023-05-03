import { Module } from '@nestjs/common';
import { AccountingOrderModule } from './modules/accounting-order/accounting-order.module';
import { ConfigModule } from '@nestjs/config';
import { DeliverymanModule } from './modules/deliveryman/deliveryman.module';
import { config } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    AccountingOrderModule,
    DeliverymanModule,
  ],
})
export class AppModule {}
