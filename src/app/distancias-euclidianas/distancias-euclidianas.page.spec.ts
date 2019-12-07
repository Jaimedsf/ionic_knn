import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanciasEuclidianasPage } from './distancias-euclidianas.page';

describe('DistanciasEuclidianasPage', () => {
  let component: DistanciasEuclidianasPage;
  let fixture: ComponentFixture<DistanciasEuclidianasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanciasEuclidianasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanciasEuclidianasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
