import {
  Controller,
  Get,
  Param,
  Query,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';
import {
  Delete,
  Post,
  Put,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';

import { Response } from 'express';
import { Product } from 'src/entities/product.entity';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private _productsService: ProductsService) {}
  // @Get('list')
  // getMany(@Query() params: any) {
  //   const { limit, offset = 0 } = params;
  //   return `limit: ${limit}, offset: ${offset}`;
  // }
  @Get('list')
  getMany(@Query('limit') limit: number, @Query('offset') offset = 0) {
    // response.status(202).send({
    //   limit,
    //   offset,
    // });
    return this._productsService.findAll();
  }
  @Get('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id') id: number) {
    // return `Product: ${id}`;
    return this._productsService.findOne(id);
  }
  // @Get('/:id')
  // getOne(@Res() response: Response, @Param('id') id: string) {
  //   response.status(200).send({
  //     message: `Product: ${id}`,
  //   });
  // }
  @Post()
  create(@Body() payload: Product) {
    const newProduct = this._productsService.create(payload);
    return {
      message: 'Created',
      payload: {
        ...newProduct,
      },
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: Product) {
    return this._productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this._productsService.delete(id);
    return true;
  }
}
