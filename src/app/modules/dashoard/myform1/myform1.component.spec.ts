import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myform1Component } from './myform1.component';

describe('Myform1Component', () => {
  let component: Myform1Component;
  let fixture: ComponentFixture<Myform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myform1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
