import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  recentProducts: Product[] = [];

  constructor(private navCtrl: NavController, private productSrv: ProductService) { }

  ngOnInit() {
    this.loadproducts();
  }

  loadproducts(){
    this.productSrv.getProducts().subscribe((products) => {
      this.recentProducts = products;
    });
  }

  navigateToReport() {
    this.navCtrl.navigateForward('/report');
  }

  navigateToFind() {
    this.navCtrl.navigateForward('/find');
  }

}
