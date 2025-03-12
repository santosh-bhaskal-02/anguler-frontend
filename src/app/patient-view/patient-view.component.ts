import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../patient-registration/patient-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-view',
  imports: [FormsModule, NgFor],
  templateUrl: './patient-view.component.html',
  styleUrl: './patient-view.component.css',
})
export class PatientViewComponent {
  patient: Patient = new Patient();
  patientRecord: Patient[] = [];

  constructor(public http: HttpClient) {
    // http: HttpClient = new HttpClient();

    const result = this.http.get('https://localhost:7039/api/Patient');

    result.subscribe(
      (res) => this.getSuccess(res),
      (res) => this.getError(res)
    );
  }
  getSuccess(res: any) {
    console.log(res);
    this.patientRecord = res;
  }

  getError(res: any) {
    console.log(res);
  }
}
