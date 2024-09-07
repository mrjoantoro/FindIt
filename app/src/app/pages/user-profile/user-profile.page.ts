import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  profileForm!: FormGroup;
  currentUser: User | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.initializeForm();
  }

  initializeForm() {
    this.profileForm = this.fb.group({
      name: [this.currentUser?.name || '', Validators.required],
      email: [{ value: this.currentUser?.email || '', disabled: true }, Validators.required], // El correo electrónico no se puede cambiar
      profileImage: [this.currentUser?.profileImage || '']
    });
  }

  updateProfile() {
    if (this.profileForm.valid) {
      this.authService.updateUser(this.profileForm.value as User);
    }
  }

  logout() {
    this.authService.logout();
  }
}
