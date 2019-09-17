import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P8Page } from './p8.page';

describe('P8Page', () => {
  let component: P8Page;
  let fixture: ComponentFixture<P8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
