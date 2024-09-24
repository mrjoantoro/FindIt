import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  implements OnInit {
  @Input() product?: Product; // Recibe un objeto Product como entrada

  constructor(private navCtrl: NavController) { }

  getStatusColor(status?: string): string {
    switch (status) {
      case "Reportado":
        return 'warning';
      case "Encontrado":
        return 'success';
      case "Validado":
        return 'tertiary';
      case "Entregado":
        return 'medium';
      default:
        return 'primary';
    }
  }

  ngOnInit() {

  }

  viewProductDetails(event: Event) {
    event.stopPropagation();  // Evita que el evento de clic se propague al ion-card
    if (this.product?.id) {
      // Navegar a la página de detalles del producto
      this.navCtrl.navigateForward(`/item/${this.product.id}`);
    }
  }

}
