import { Module } from '@nestjs/common';
import { OrdersModule } from './modules/orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { DeliverymanModule } from './modules/deliveryman/deliveryman.module';
import { config } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    OrdersModule,
    DeliverymanModule,
  ],
})
export class AppModule {}
