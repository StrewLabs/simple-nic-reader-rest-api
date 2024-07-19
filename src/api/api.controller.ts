import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  constructor() {}

  @Get()
  getHello() {
    return 'Get Hello World!';
  }
}
