import { Module } from '@nestjs/common';

// Controllers
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';

// Services
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

@Module({
  controllers: [CustomersController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
