import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationErrorMessagesComponent } from './validation-error-messages.component';

describe('ValidationErrorMessagesComponent', () => {
  let component: ValidationErrorMessagesComponent;
  let fixture: ComponentFixture<ValidationErrorMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationErrorMessagesComponent]
    });
    fixture = TestBed.createComponent(ValidationErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
