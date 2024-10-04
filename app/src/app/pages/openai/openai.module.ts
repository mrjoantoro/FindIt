import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenaiPageRoutingModule } from './openai-routing.module';

import { OpenaiPage } from './openai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenaiPageRoutingModule
  ],
  declarations: [OpenaiPage]
})
export class OpenaiPageModule {}
