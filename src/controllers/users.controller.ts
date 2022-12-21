import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): string {
    return 'Hello Users';
  }
}
