import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P15Page } from './p15.page';

describe('P15Page', () => {
  let component: P15Page;
  let fixture: ComponentFixture<P15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P15Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
