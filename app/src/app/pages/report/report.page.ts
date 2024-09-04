import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  reportForm!: FormGroup;  // Usamos el operador de aserción no nula para inicializar luego
  selectedImage: File | null = null;  // Para manejar la imagen seleccionada

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Inicializamos el formulario en ngOnInit
    this.reportForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', Validators.required],
      imageUrl: [''],  // Inicialmente vacío, lo llenaremos si se selecciona una imagen
      status: ['Reportado', Validators.required],  // Estado inicial por defecto
    });
  }

  // Método para manejar el envío del formulario
  submitReport() {
    if (this.reportForm.valid) {
      const productData = this.reportForm.value;

      if (this.selectedImage) {
        // Si hay una imagen seleccionada, agrega la URL simulada de la imagen
        productData.imageUrl = this.selectedImage.name;  // Simulamos que subimos la imagen
      }

      // Llamamos al servicio para agregar el producto
      this.productService.addProduct(productData).then(() => {
        this.navCtrl.back();  // Navegar hacia atrás después del envío
      });
    }
  }

  // Método para manejar la selección de la imagen
  onImageSelected(image: File) {
    this.selectedImage = image;  // Almacenamos la imagen seleccionada
  }
}
