import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioPage } from './questionario.page';

describe('QuestionarioPage', () => {
  let component: QuestionarioPage;
  let fixture: ComponentFixture<QuestionarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
