import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P11Page } from './p11.page';

describe('P11Page', () => {
  let component: P11Page;
  let fixture: ComponentFixture<P11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
