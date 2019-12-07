import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteDepressaoPage } from './teste-depressao.page';

describe('TesteDepressaoPage', () => {
  let component: TesteDepressaoPage;
  let fixture: ComponentFixture<TesteDepressaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteDepressaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteDepressaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
