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

@Controller('products')
export class ProductsController {
  // @Get('list')
  // getMany(@Query() params: any) {
  //   const { limit, offset = 0 } = params;
  //   return `limit: ${limit}, offset: ${offset}`;
  // }
  @Get('list')
  getMany(@Query('limit') limit: number, @Query('offset') offset = 0) {
    return `limit: ${limit}, offset: ${offset}`;
  }
  // @Get('/:id')
  // @HttpCode(HttpStatus.ACCEPTED)
  // getOne(@Param() params: any) {
  //   return `Product: ${params.id}`;
  // }
  @Get('/:id')
  getOne(@Res() response: Response, @Param('id') id: string) {
    response.status(200).send({
      message: `Product: ${id}`,
    });
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Message',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
