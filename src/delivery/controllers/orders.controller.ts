import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { UpdateOrderDto } from '../dtos/request/update-order.dto';
import { Order } from '../models/orders.model';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Get('/')
  find(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Post('/:orderId')
  updateOrderById(
    @Param('orderId') orderId: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    return this.orderService.updateOrder(+orderId, updateOrderDto);
  }
}
