import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreZungPage } from './sobre-zung.page';

describe('SobreZungPage', () => {
  let component: SobreZungPage;
  let fixture: ComponentFixture<SobreZungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreZungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreZungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
