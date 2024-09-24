import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  passwordsMatch(formGroup: FormGroup) {
    const { password, confirmPassword } = formGroup.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onRegister() {
    const user = this.registerForm.value as User;
    if (this.authService.register(user)) {
      // Navegar al login después de crear el usuario
      alert('Usuario creado con éxito');
      this.navCtrl.navigateBack('/login');
    } else {
      alert('El usuario ya está registrado');
    }
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
