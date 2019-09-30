import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZungPage } from './zung.page';

describe('ZungPage', () => {
  let component: ZungPage;
  let fixture: ComponentFixture<ZungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
