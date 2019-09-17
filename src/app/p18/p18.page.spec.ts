import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P18Page } from './p18.page';

describe('P18Page', () => {
  let component: P18Page;
  let fixture: ComponentFixture<P18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P18Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
