import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  reportForm!: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController) { }

  ngOnInit() {
  }

  initializeForm() {
    this.reportForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required, Validators.minLength(10)],
      location: ['', Validators.required],
      imageUrl: [''],
      status: ['Reportado', Validators.required] // Default value Reportado
    })
  }

  submitReport() {
    if(this.reportForm.valid) {
      console.log('Reporte enviado', this.reportForm.value);
      this.navCtrl.navigateRoot('/home');
    }
  }

}
