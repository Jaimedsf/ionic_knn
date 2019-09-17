import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P9Page } from './p9.page';

describe('P9Page', () => {
  let component: P9Page;
  let fixture: ComponentFixture<P9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
