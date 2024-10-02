import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';
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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }



  async onRegister() {
    const user = this.registerForm.value as User;
    try {
      const result = await this.authService.register(user);
      console.log('Registro exitoso', result);
    } catch (error) {
      console.log('Error al registrar', error);
    }
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
}
