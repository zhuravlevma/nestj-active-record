import { Module } from '@nestjs/common';
import { AccountingOrderModule } from './modules/accounting-order/accounting-order.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deliveryman } from './models/deliveryman.model';
import { Order } from './models/orders.model';
import { DeliverymanModule } from './modules/deliveryman/deliveryman.module';
import { config } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config().database.host,
      port: config().database.port,
      username: config().database.username,
      password: config().database.password,
      database: config().database.name,
      entities: [Order, Deliveryman],
      synchronize: true,
      logging: true,
    }),
    AccountingOrderModule,
    DeliverymanModule,
  ],
})
export class AppModule {}
