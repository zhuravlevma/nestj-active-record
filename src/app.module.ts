import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { DeliverymanModule } from './deliveryman/deliveryman.module';
import { config } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deliveryman } from './__typeorm/deliveryman.model';
import { Order } from './__typeorm/orders.model';

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
    OrdersModule,
    DeliverymanModule,
  ],
})
export class AppModule {}
