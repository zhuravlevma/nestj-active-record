import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/all')
  findAllUsers() {
    return this.userService.findAll();
  }
}
