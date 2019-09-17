import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P13Page } from './p13.page';

describe('P13Page', () => {
  let component: P13Page;
  let fixture: ComponentFixture<P13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P13Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
