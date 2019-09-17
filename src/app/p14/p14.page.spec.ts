import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P14Page } from './p14.page';

describe('P14Page', () => {
  let component: P14Page;
  let fixture: ComponentFixture<P14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P14Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
