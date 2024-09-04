import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-custom',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.scss'],
})
export class HeaderCustomComponent  {
  @Input() title: string = 'Default Title';  // Título dinámico del encabezado
  @Input() showBackButton: boolean = true;   // Mostrar u ocultar el botón de volver
  @Input() showProfileButton: boolean = true; // Mostrar u ocultar el botón de perfil
  @Input() profileButtonUrl: string = '/profile'; // URL para el botón de perfil

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }

}
