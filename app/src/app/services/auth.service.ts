import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() { }

  register(user: User): boolean {
    // Verificar si el usuario existe
    const userExists = this.users.some(u => u.email === user.email);
    if(userExists) {
      return false; //Usuario ya existe
    }

    // Agrega un nuevo usuario
    this.users.push(user);
    return true;
  }

  login(email: string, password: string): boolean {
    //Busca el usuario en la lista
    const user = this.users.find(user => user.email === email && user.password === password);
    if(user){
      this.currentUser = user;
      return true;
    }

    return false;
  }

  logout(): void {
    this.currentUser = null; // Cierre la sesión
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null; // Verifica si hay un usuario logeado
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.email === user.email);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

}
