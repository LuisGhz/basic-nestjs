import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AppService } from './app.service';

// Controllers
import { AppController } from './app.controller';

// Modules
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ProductsModule, UsersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
