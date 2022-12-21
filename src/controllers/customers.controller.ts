import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers(): string {
    return 'Get Customers';
  }
}
