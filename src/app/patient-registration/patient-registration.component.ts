import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from './patient-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-registration',
  imports: [FormsModule, NgFor],
  templateUrl: './patient-registration.component.html',
  styleUrl: './patient-registration.component.css',
})
export class PatientRegistrationComponent {
  patient: Patient = new Patient();
  patientRecord: Patient[] = [];
  // http: HttpClient = new HttpClient();

  constructor(public http: HttpClient) {}

  handleSubmit() {
    const observer = this.http.post(
      'https://localhost:7039/api/Patient',
      this.patient
    );
    observer.subscribe(
      (res) => this.postSuccess(res),
      (res) => this.postError(res)
    );
  }

  postSuccess(res: any) {
    alert(this.patient.name + ', Registration Successful...!');
    console.log(res);
  }

  postError(res: any) {
    console.log(res);
  }
}