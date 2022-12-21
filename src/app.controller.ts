import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/products/:id')
  getProduct(@Param() params: any) {
    return `Product: ${params.id}`;
  }
  // @Get('/products/:id')
  // getProduct(@Param('id') id: string) {
  //   return `Product: ${id}`
  // }

  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset = 0 } = params;
  //   return `limit: ${limit}, offset: ${offset}`;
  // }
  @Get('products')
  getProducts(@Query('limit') limit: number, @Query('offset') offset = 0) {
    return `limit: ${limit}, offset: ${offset}`;
  }

  @Get('/categories/:id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `Category: ${id}, product: ${productId}`;
  }
}
