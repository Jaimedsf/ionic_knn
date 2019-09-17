import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P20Page } from './p20.page';

describe('P20Page', () => {
  let component: P20Page;
  let fixture: ComponentFixture<P20Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P20Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
