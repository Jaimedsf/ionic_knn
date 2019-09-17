import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P3Page } from './p3.page';

describe('P3Page', () => {
  let component: P3Page;
  let fixture: ComponentFixture<P3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
