import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.mode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static users: User[] = [
    {
      uid: '1',
      name: 'Juan Perez',
      email: 'juan.perez@example.com',
      profileImage: 'https://example.com/juan.jpg'
    },
    {
      uid: '2',
      name: 'Maria Gomez',
      email: 'maria.gomez@example.com',
      profileImage: 'https://example.com/maria.jpg'
    }
  ];

  private currentUser: User | null = AuthService.users[0]; // Simula que el primer usuario está autenticado

  constructor() { }

  // Simula la obtención del usuario actual
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Simula la actualización del perfil del usuario
  updateUserProfile(user: Partial<User>): Promise<void> {
    if (this.currentUser) {
      this.currentUser = { ...this.currentUser, ...user };
      const index = AuthService.users.findIndex(u => u.uid === this.currentUser?.uid);
      if (index !== -1) {
        AuthService.users[index] = this.currentUser;
      }
      return Promise.resolve();
    }
    return Promise.reject('No hay un usuario autenticado');
  }

  // Simula el cierre de sesión
  logout(): Promise<void> {
    this.currentUser = null;
    return Promise.resolve();
  }

  // Simula un inicio de sesión (para propósitos de prueba)
  login(email: string): Observable<User | null> {
    const user = AuthService.users.find(u => u.email === email);
    if (user) {
      this.currentUser = user;
      return of(this.currentUser);
    }
    return of(null);
  }
}
