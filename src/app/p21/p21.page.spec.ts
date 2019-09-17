import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P21Page } from './p21.page';

describe('P21Page', () => {
  let component: P21Page;
  let fixture: ComponentFixture<P21Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P21Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
