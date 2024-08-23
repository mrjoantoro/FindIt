import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: Product[] = [
    {
      id: '1',
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://fjallraven.cl/cdn/shop/files/kanken_23510-424_a_main_fjr_5000x.jpg?v=1713990589',
      status: 'Reportado',
      location: 'Location 1',
      dateReported: new Date()
    },
    {
      id: '2',
      title: 'Product 2',
      description: 'Nullam varius, lectus vel consectetur tincidunt, nisi ligula sodales est.',
      imageUrl: 'https://via.placeholder.com/150',
      status: 'Encontrado',
      location: 'Location 2',
      dateReported: new Date()
    },
    {
      id: '3',
      title: 'Product 3',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      imageUrl: 'https://via.placeholder.com/150',
      status: 'Validado',
      location: 'Location 3',
      dateReported: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  viewDetails(productId?: string) {
    if (productId) {
      console.log('Ver detalles del producto con ID:', productId);
      // Aquí podrías navegar a la página de detalles o realizar alguna acción.
    } else {
      console.error('El producto no tiene un ID válido');
    }
  }

}
