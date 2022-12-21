import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(): string {
    return 'Hello Orders!';
  }
}
