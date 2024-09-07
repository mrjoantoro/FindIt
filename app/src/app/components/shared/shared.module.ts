import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
import { HeaderCustomComponent } from '../header-custom/header-custom.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    SearchBarComponent,
    ImageUploaderComponent,
    HeaderCustomComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ProductCardComponent,
    SearchBarComponent,
    ImageUploaderComponent,
    HeaderCustomComponent
  ]
})
export class SharedModule { }
