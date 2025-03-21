import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewComponent } from './patient-view.component';

describe('PatientViewComponent', () => {
  let component: PatientViewComponent;
  let fixture: ComponentFixture<PatientViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
