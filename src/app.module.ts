import { Module } from '@nestjs/common';
import { AppService } from './app.service';

// Controllers
import { AppController } from './app.controller';

// Modules
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
