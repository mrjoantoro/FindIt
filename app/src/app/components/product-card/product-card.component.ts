import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  implements OnInit {
  @Input() product?: Product; // Recibe un objeto Product como entrada

  constructor() { }

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

}
