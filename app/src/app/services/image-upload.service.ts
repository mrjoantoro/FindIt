import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  constructor(private storage: AngularFireStorage) {}

  // Subir imagen a Firebase Storage
  uploadImage(file: string, productId: string): Promise<string> {
    const filePath = `products/${productId}/${new Date().getTime()}.jpg`;  // Ruta del archivo en Firebase
    const fileRef = this.storage.ref(filePath);

    return new Promise((resolve, reject) => {
      const task = this.storage.ref(filePath).putString(file, 'data_url');  // Subimos el archivo en base64
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            resolve(url);  // Obtenemos la URL de descarga cuando la subida haya terminado
          }, error => reject(error));
        })
      ).subscribe();
    });
  }
}
