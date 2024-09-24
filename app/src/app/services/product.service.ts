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
      title: 'Laptop Asus',
      description: 'Laptop Asus en mal estado, con pantalla rota y memoria desmarcada',
      imageUrl: 'https://dlcdnwebimgs.asus.com/gain/66c520d7-3e90-4aa3-8f78-afa19b2353a3/w800',
      status: 'Encontrado',
      location: 'Sala de Juegos',
      dateReported: new Date(),
    },
    {
      id: '4',
      title: 'Smartwatch Apple',
      description: 'Smartwatch Apple roto y sin funcionamiento',
      imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_PF+watch-case-44-aluminum-midnight-cell-se_VW_PF+watch-face-44-aluminum-midnight-se_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=bHFVQVBoeitqYlU0U0prOTUxdG50bWdubGxNYk1RSDZNQVdMZTJKdDdwNVpjRzhoU1U2SFhrVUxaaTlNcXE3c1hZWkh2OUUyOXBpb0RkYTRLZ2cxbnhpWE5LNlBMYStqTjdWem0zakpaYVgrZWJ1dDBQMmRIcG56d2hydStkNFgxeEI1Q1gyYTFEdjFsR05pRUVKUTZNQjZaaVFBVTV1TTNBZXIyTDVibzdTT0lodkdNeWd3SHAzZlUzNms5S2kxU2xDa2ttY2dzWENkb0dDVHdHMXNJNytsMS9wYkJqMEpaUis5MmhXUnhETT0=',
      status: 'Encontrado',
      location: 'Sala de Juegos',
      dateReported: new Date(),
    },
    {
      id: '5',
      title: 'Auriculares Sony',
      description: 'Auriculares Sony roto, sin audio y sin poder de reproducción',
      imageUrl: 'https://clsonyb2c.vtexassets.com/arquivos/ids/457686-1600-auto?v=637623540397300000&width=1600&height=auto&aspect=true',
      status: 'Reportado',
      location: 'Sala de Juegos',
      dateReported: new Date(),
    },
    {
      id: '6',
      title: 'Smart TV Samsung',
      description: 'Smart TV Samsung roto y sin poder de reproducción',
      imageUrl: 'https://www.abcdin.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb165d7b9/images/large/25915380.jpg?sw=1200&sh=1200&sm=fit',
      status: 'Reportado',
      location: 'Sala de Juegos',
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
