import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ProductService } from '../../services/product.service';

import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);


@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  reportForm!: FormGroup;
  selectedImage: string | null = null; // Almacena la imagen seleccionada

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.reportForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', Validators.required],
      imageUrl: [''], // El campo para la imagen
      status: ['Reportado', Validators.required],
    });
  }

  // Método que maneja la imagen seleccionada emitida desde el componente ImageUploader
  onImageSelected(imageBase64: string) {
    console.log(imageBase64);
    this.selectedImage = imageBase64; // Guardamos la imagen seleccionada en base64
    this.reportForm.patchValue({ imageUrl: this.selectedImage }); // Actualizamos el campo imageUrl en el formulario
  }

  // Método para manejar el envío del formulario
  submitReport() {
    if (this.reportForm.valid) {
      const productData = this.reportForm.value;
      this.productService.createLostProduct(productData)
        .then(() => {
          console.log('Reporte creado satisfactoriamente');
          this.navCtrl.navigateForward('/home');
        })
        .catch((error) => {
          console.log('Error al crear el reporte', error);
        });
    }
  }
}
