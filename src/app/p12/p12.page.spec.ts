import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P12Page } from './p12.page';

describe('P12Page', () => {
  let component: P12Page;
  let fixture: ComponentFixture<P12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P12Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
