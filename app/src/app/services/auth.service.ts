import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth : AngularFireAuth,
    private router: Router
  ) { }

  // Crear usuario con Firebase
  register(user: User): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        console.log('Usuario creado satisfactoriamente', result);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log('Error al crear el usuario', error);
        throw error;
      });
  }

  // Iniciar sesión con Firebase
  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log('Sesion iniciada satisfactoriamente', result);
      this.router.navigate(['/home']);
    })
    .catch((error) => {
      console.log('Error al iniciar sesión', error);
      throw error;
    });
  }

  // Cerrar sesión
  logout(): Promise<any> {
    return this.afAuth.signOut()
      .then(() => {
        console.log('Sesion cerrada satisfactoriamente');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log('Error al cerrar sesion', error);
        throw error;
      });
  }

  // Cambio de contraseña
  resetPassword(email: string): Promise<any> {
    return this.afAuth.sendPasswordResetEmail(email)
      .then(() => {
        console.log('Se envio un correo para restablecer la contraseña');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log('Error al enviar correo', error);
        throw error;
      });
  }

  isLoggedIn(): boolean {
    return this.afAuth.authState !== null;
  }

  getCurrentUser(): Promise<any> {
    return this.afAuth.currentUser;
  }
}
