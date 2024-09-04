import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    SearchBarComponent,
    ImageUploaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    ProductCardComponent,
    SearchBarComponent,
    ImageUploaderComponent
  ]
})
export class SharedModule { }
