import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P7Page } from './p7.page';

describe('P7Page', () => {
  let component: P7Page;
  let fixture: ComponentFixture<P7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
