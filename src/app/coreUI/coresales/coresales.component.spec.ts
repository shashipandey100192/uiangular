import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresalesComponent } from './coresales.component';

describe('CoresalesComponent', () => {
  let component: CoresalesComponent;
  let fixture: ComponentFixture<CoresalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoresalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoresalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
