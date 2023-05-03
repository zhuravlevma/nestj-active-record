import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ChangeDeliverymansStatusDto } from 'src/modules/deliveryman/web/dtos/change-deliverymans-status.dto';
import { CreateDeliverymanDto } from 'src/modules/deliveryman/web/dtos/create-deliveryman.dto';
import { CreateOrderDto } from 'src/modules/deliveryman/web/dtos/create-order.dto';
import { UpdateDeliverymansInfoDto } from 'src/modules/deliveryman/web/dtos/update-deliverymans-info.dto';
import { UpdateDeliverymansOrdersDto } from 'src/modules/deliveryman/web/dtos/update-deliverymans-orders.dto';
import { Deliveryman } from 'src/models/deliveryman.model';
import { AddOrderToDeliverymanService } from 'src/modules/deliveryman/services/add-order-to-deliveryman.service';
import { ChangeDeliverymansStatusService } from 'src/modules/deliveryman/services/change-deliverymans-status';
import { CreateDeliverymanService } from 'src/modules/deliveryman/services/create-deliveryman.service';
import { FindAllDeliverymansService } from 'src/modules/deliveryman/services/find-all-deliverymans';
import { UpdateDeliverymansInfoService } from 'src/modules/deliveryman/services/update-deliverymans-info.service';
import { UpdateDeliverymansOrdersService } from 'src/modules/deliveryman/services/update-deliverymans-orders.service';

@Controller('deliverymans')
export class DeliverymanController {
  constructor(
    private readonly findAllDeliverymansService: FindAllDeliverymansService,
    private readonly createDeliverymanService: CreateDeliverymanService,
    private readonly addOrderToDeliverymanService: AddOrderToDeliverymanService,
    private readonly updateDeliverymansInfoService: UpdateDeliverymansInfoService,
    private readonly changeDeliverymansStatusService: ChangeDeliverymansStatusService,
    private readonly updateDeliverymansOrdersService: UpdateDeliverymansOrdersService,
  ) {}

  @Get('/')
  find(): Promise<Deliveryman[]> {
    return this.findAllDeliverymansService.findAllDeliverymans();
  }

  @Post('/')
  createDeliveryMan(
    @Body() createDeliveryManDto: CreateDeliverymanDto,
  ): Promise<Deliveryman> {
    return this.createDeliverymanService.createDeliveryMan(
      createDeliveryManDto,
    );
  }

  @Post('/:deliverymanId/orders')
  addOrderToDeliveryman(
    @Param('deliverymanId') deliverymanId: string,
    @Body() createDeliveryManDto: CreateOrderDto,
  ): Promise<Deliveryman> {
    return this.addOrderToDeliverymanService.addOrderToDeliveryman(
      +deliverymanId,
      createDeliveryManDto,
    );
  }

  @Patch('/:deliverymanId')
  updateDeliverymansInfo(
    @Param('deliverymanId') deliverymanId: string,
    @Body() updateDeliveryManDto: UpdateDeliverymansInfoDto,
  ): Promise<Deliveryman> {
    return this.updateDeliverymansInfoService.updateDeliverymansInfo(
      +deliverymanId,
      updateDeliveryManDto,
    );
  }

  @Patch('/:deliverymanId/status')
  changeDeliverymansStatus(
    @Param('deliverymanId') deliverymanId: string,
    @Body() changeDeliverymansStatusDto: ChangeDeliverymansStatusDto,
  ): Promise<Deliveryman> {
    return this.changeDeliverymansStatusService.changeDeliverymansStatus(
      +deliverymanId,
      changeDeliverymansStatusDto,
    );
  }

  @Patch('/:deliverymanId/orders')
  updateDeliverymansOrders(
    @Param('deliverymanId') deliverymanId: string,
    @Body() updateDeliverymansOrdersDto: UpdateDeliverymansOrdersDto,
  ): Promise<Deliveryman> {
    return this.updateDeliverymansOrdersService.updateDeliverymansOrdersDto(
      +deliverymanId,
      updateDeliverymansOrdersDto,
    );
  }
}
