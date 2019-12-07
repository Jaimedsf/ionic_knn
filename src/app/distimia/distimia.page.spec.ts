import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistimiaPage } from './distimia.page';

describe('DistimiaPage', () => {
  let component: DistimiaPage;
  let fixture: ComponentFixture<DistimiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistimiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistimiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
