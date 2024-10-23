import { CanActivateFn, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.getLocalStorageItem('user')) {
    console.log('Guard!' + authService.getLocalStorageItem('user'))
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
