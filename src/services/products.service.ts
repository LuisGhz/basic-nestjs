import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  #counter = 3;
  #products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Desc 1',
      price: 50,
      stock: 100,
      image: '',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Desc 2',
      price: 60,
      stock: 120,
      image: '',
    },
  ];

  findAll() {
    return this.#products;
  }

  findOne(id: number) {
    const product = this.#products.find((p) => p.id === Number(id));
    if (!product)
      throw new NotFoundException(`Product with id ${id} does not exist`);
    return product;
  }

  create(payload: Product) {
    const newProduct: Product = {
      id: this.#counter++,
      ...payload,
    };

    this.#products.push(newProduct);
    return this.#products[this.#products.length - 1];
  }

  update(id: number, payload: Product) {
    const product = this.findOne(id);
    if (!product) return null;

    const index = this.#products.findIndex((p) => p.id === Number(id));
    this.#products[index] = {
      ...product,
      ...payload,
    };
    return this.#products[index];
  }

  delete(id: number) {
    const index = this.#products.findIndex((p) => p.id === Number(id));
    if (index === -1)
      throw new NotFoundException(`Product with id ${id} does not exist`);
    this.#products.splice(index, 1);
  }
}
