import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deliveryman } from 'src/models/deliveryman.model';
import { Order } from 'src/models/orders.model';
import { DeliverymanRepository } from './deliveryman.repository';
import { OrdersRepository } from './orders.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        entities: [Order, Deliveryman],
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Order, Deliveryman]),
  ],
  providers: [DeliverymanRepository, OrdersRepository],
  exports: [DeliverymanRepository, OrdersRepository],
})
export class RepositoriesModule {}
