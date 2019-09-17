import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2Page } from './p2.page';

describe('P2Page', () => {
  let component: P2Page;
  let fixture: ComponentFixture<P2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
