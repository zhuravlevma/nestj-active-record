import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/request/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Get('/')
  find() {
    return this.orderService.findAll();
  }

  @Post('/')
  create(@Body() createUserDto: CreateOrderDto) {
    return this.orderService.create(createUserDto);
  }
}
