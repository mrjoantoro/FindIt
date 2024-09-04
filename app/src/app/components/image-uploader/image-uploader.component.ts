import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent {
  @Output() imageSelected = new EventEmitter<File>();  // Emite la imagen seleccionada

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageSelected.emit(file);  // Emitimos el archivo seleccionado
    }
  }
}
