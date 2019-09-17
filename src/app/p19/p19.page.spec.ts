import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P19Page } from './p19.page';

describe('P19Page', () => {
  let component: P19Page;
  let fixture: ComponentFixture<P19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P19Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
