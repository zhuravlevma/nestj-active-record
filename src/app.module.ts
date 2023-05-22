import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DeliveryModule } from './delivery/delivery.module';
import { config } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deliveryman } from './delivery/__models__/deliveryman.model';
import { Order } from './delivery/__models__/orders.model';

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
    DeliveryModule,
  ],
})
export class AppModule {}
