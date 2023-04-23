import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DeliverymanService } from './deliveryman.service';
import { Deliveryman } from './models/deliveryman.model';
import { CreateDeliveryManDto } from './dtos/request/create-deliveryman.dto';
import { CreateOrderDto } from './dtos/request/create-order.dto';

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
}
