import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteHomePage } from './teste-home.page';

describe('TesteHomePage', () => {
  let component: TesteHomePage;
  let fixture: ComponentFixture<TesteHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
