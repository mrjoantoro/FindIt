import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goHome() {
    this.navCtrl.navigateForward('/home');
  }

}
