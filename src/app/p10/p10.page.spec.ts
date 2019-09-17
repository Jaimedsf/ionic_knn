import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P10Page } from './p10.page';

describe('P10Page', () => {
  let component: P10Page;
  let fixture: ComponentFixture<P10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
