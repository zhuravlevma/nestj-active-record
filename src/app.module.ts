import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveryModule } from './delivery/delivery.module';
import { Deliveryman } from './delivery/models/deliveryman.model';
import { Order } from './delivery/models/orders.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'maksim',
      password: '123321',
      database: 'postgres',
      entities: [Order, Deliveryman],
      synchronize: true,
    }),
    DeliveryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
