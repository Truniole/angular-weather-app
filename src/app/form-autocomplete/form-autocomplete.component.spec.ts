/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormAutocompleteComponent } from './form-autocomplete.component';

describe('FormAutocompleteComponent', () => {
  let component: FormAutocompleteComponent;
  let fixture: ComponentFixture<FormAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
