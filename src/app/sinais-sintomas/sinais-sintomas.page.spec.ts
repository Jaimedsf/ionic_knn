import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinaisSintomasPage } from './sinais-sintomas.page';

describe('SinaisSintomasPage', () => {
  let component: SinaisSintomasPage;
  let fixture: ComponentFixture<SinaisSintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinaisSintomasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinaisSintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
