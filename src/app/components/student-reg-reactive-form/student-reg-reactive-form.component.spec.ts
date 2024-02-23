  import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegReactiveFormComponent } from './student-reg-reactive-form.component';

describe('StudentRegReactiveFormComponent', () => {
  let component: StudentRegReactiveFormComponent;
  let fixture: ComponentFixture<StudentRegReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentRegReactiveFormComponent]
    });
    fixture = TestBed.createComponent(StudentRegReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
