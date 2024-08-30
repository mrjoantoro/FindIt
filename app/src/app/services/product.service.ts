import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private static products: Product[] = [
    {
      id: '1',
      title: 'iPhone 14',
      description: 'Teléfono encontrado en el primer piso cerca de la entrada principal',
      imageUrl: 'https://d1aqw5mz0wngqe.cloudfront.net/images/spree/images/2123123/attachments/large/Apple_iPhone_14_Midnight_1A.jpg?1678205819',
      status: 'Encontrado',
      location: 'Piso 1',
      dateReported: new Date(),
    },
    {
      id: '2',
      title: 'Mochila Negra',
      description: 'Mochila negra perdida en el laboratorio de computación',
      imageUrl: 'https://saxoline.cl/cdn/shop/files/be80f11798a3621a23baa2c2ef8ad8cba04f77fdad9add5abcf048dce2a187ac_2000x.jpg?v=1687469550',
      status: 'Encontrado',
      location: 'LPC10+1',
      dateReported: new Date(),
    },
    {
      id: '3',
      title: 'iPhone 13',
      description: 'iPhone 13 encontrado en el segundo piso cerca de la entrada principal',
      imageUrl: 'https://d1aqw5mz0wngqe.cloudfront.net/images/spree/images/2123123/attachments/large/Apple_iPhone_13_Midnight_1A.jpg?1678205819',
      status: 'Encontrado',
      location: 'Piso 2',
      dateReported: new Date(),
    },
    {
      id: '4',
      title: 'Reloj',
      description: 'Reloj perdido en el segundo piso cerca de la entrada principal',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0682/5333/products/19099_1024x1024.jpg?v=1679396987',
      status: 'Encontrado',
      location: 'Piso 2',
      dateReported: new Date(),
    }
  ];

  constructor() { }

  // Simula obtener productos desde Firebase
  getProducts(): Observable<Product[]> {
    return of(ProductService.products);
  }

  // Simula agregar un producto a la colección estática
  addProduct(product: Product) {
    product.id = (ProductService.products.length + 1).toString(); // Asigna un ID simple
    ProductService.products.push(product);
    return Promise.resolve(); // Simula el comportamiento de una promesa.
  }

  // Simula obtener un producto por su ID
  getProductById(id: string): Observable<Product | undefined> {
    const product = ProductService.products.find(p => p.id === id);
    return of(product);
  }
}
