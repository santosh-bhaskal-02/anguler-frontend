import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'patient-reg',
    loadComponent: () =>
      import('./patient-registration/patient-registration.component').then(
        (m) => m.PatientRegistrationComponent
      ),
  },

  {
    path: 'patient-view',
    loadComponent: () =>
      import('./patient-view/patient-view.component').then(
        (m) => m.PatientViewComponent
      ),
  },
];
