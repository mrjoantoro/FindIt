import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private productSrv: ProductService, private navCtrl: NavController) { }

  ngOnInit() {
    this.loadproducts();
  }

  loadproducts(){
    this.productSrv.getProducts().subscribe((products) => {
      this.products = products.filter(product => product.status === 'Encontrado');
      this.filteredProducts = [...this.products];
    });
  }

  filterProducts(){
    const term = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.location?.toLowerCase().includes(term)
    );
  }

  viewProduct(productId: string) {
    this.navCtrl.navigateForward(`/item/${productId}`);
  }


}
