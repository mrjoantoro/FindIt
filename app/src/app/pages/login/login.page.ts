import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authSrv: AuthService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    this.authSrv.login(email, password)
      .then(() => {
        this.navCtrl.navigateForward('/home');
      })
      .catch((error) => {
        console.log('Error al iniciar sesión', error);
      });
  }

  goToRegister() {
    // Navegar a la página de registro
    this.navCtrl.navigateForward('/register');
  }

}
