import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P17Page } from './p17.page';

describe('P17Page', () => {
  let component: P17Page;
  let fixture: ComponentFixture<P17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P17Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
