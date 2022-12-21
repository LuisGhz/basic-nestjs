import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
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
}
