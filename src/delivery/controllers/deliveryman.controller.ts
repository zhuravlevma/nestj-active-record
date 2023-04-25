import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeliverymanService } from '../services/deliveryman.service';
import { Deliveryman } from '../models/deliveryman.model';
import { CreateDeliveryManDto } from '../dtos/create-deliveryman.dto';
import { CreateOrderDto } from '../dtos/request/create-order.dto';
import { UpdateDeliverymanDto } from '../dtos/request/update-deliveryman.dto';
import { UpdateDeliverymansOrdersDto } from '../dtos/request/update-deliverymans-orders.dto';

@Controller('deliverymans')
export class DeliverymanController {
  constructor(private readonly deliverymanService: DeliverymanService) {}

  @Get('/')
  find(): Promise<Deliveryman[]> {
    return this.deliverymanService.findAll();
  }

  @Post('/')
  addDeliveryMan(
    @Body() createDeliveryManDto: CreateDeliveryManDto,
  ): Promise<Deliveryman> {
    return this.deliverymanService.addDeliveryMan(createDeliveryManDto);
  }

  @Post('/:deliverymanId/orders')
  addOrderToDeliveryman(
    @Param('deliverymanId') deliverymanId: string,
    @Body() createDeliveryManDto: CreateOrderDto,
  ): Promise<Deliveryman> {
    return this.deliverymanService.addOrderToDeliveryman(
      +deliverymanId,
      createDeliveryManDto,
    );
  }

  @Patch('/:deliverymanId')
  updateDeliveryman(
    @Param('deliverymanId') deliverymanId: string,
    @Body() updateDeliveryManDto: UpdateDeliverymanDto,
  ): Promise<Deliveryman> {
    return this.deliverymanService.updateDeliveryman(
      +deliverymanId,
      updateDeliveryManDto,
    );
  }

  @Patch('/:deliverymanId/orders')
  updateDeliverymansOrders(
    @Param('deliverymanId') deliverymanId: string,
    @Body() updateDeliverymansOrdersDto: UpdateDeliverymansOrdersDto,
  ): Promise<Deliveryman> {
    return this.deliverymanService.updateDeliverymansOrdersDto(
      +deliverymanId,
      updateDeliverymansOrdersDto,
    );
  }
}
