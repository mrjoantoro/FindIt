import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dbPath = '/products'; // Ruta en la base de datos para los productos

  constructor(private db: AngularFireDatabase) { }

  // Crear un producto perdido
  createLostProduct(product: Product): Promise<void> {
    const productData: Product = {
      ...product,
      status: 'Reportado',
      dateReported: new Date() // Aseguramos que la fecha sea la actual
    }

    // Creamos el producto y obtenemos la clave generada
    const key = this.db.list(this.dbPath).push(productData).key;

    // Actualizamos el producto para incluir el ID reservado
    return this.db.object(`${this.dbPath}/${key}`).update({ id: key });
  }

  // Crear un producto encontrado (quién lo encontró)
  reportFoundProduct(productId: string, foundData: Partial<Product>): Promise<void>{
    const updateData = {
      ...foundData,
      status: 'Encontrado',
    };

    // Actualizamos el estado y la información del producto
    return this.db.object(`${this.dbPath}/${productId}`).update(updateData);
  }

  // Obtener todos los productos
  getProducts(): Observable<Product[]> {
    return this.db.list(this.dbPath).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
          const productData = c.payload.val() as Product;
          return {
            ...productData,
            id: c.payload.key ?? ''
          };
        })
      )
    );
  }

  // Obtener un producto especifico por Id
  getProductById(productId: string): Observable<Product | undefined> {
    return this.db.object(`${this.dbPath}/${productId}`).valueChanges().pipe(
      map((product) => product ? (product as Product) : undefined) // Devuelve undefined si no se encuentra el producto
    );
  }

  // Actualizar el estado de un producto
  updateProductStatus(productId: string, newStatus: Product['status']): Promise<void> {
    return this.db.object(`${this.dbPath}/${productId}`).update({ status: newStatus });
  }

  // Actualizar toda la información de un producto
  updateProduct(productId: string, updateProduct: Partial<Product>): Promise<void> {
    return this.db.object(`${this.dbPath}/${productId}`).update(updateProduct);
  }

  deleteProduct(productId: string): Promise<void> {
    return this.db.object(`${this.dbPath}/${productId}`).remove();
  }
}
