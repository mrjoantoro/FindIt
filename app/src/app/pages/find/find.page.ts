import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products.filter(product => product.status === 'Encontrado');
      this.filteredProducts = this.products;
    });
  }

  // Filtrar productos según el término de búsqueda
  filterProducts(searchTerm: string) {
    const term = searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      (product.location?.toLowerCase().includes(term) ?? false)
    );
  }

  viewProduct(productId: string) {
    // Navega a la página de detalles del producto
  }
}
