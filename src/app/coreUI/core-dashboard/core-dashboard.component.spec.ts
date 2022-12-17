import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDashboardComponent } from './core-dashboard.component';

describe('CoreDashboardComponent', () => {
  let component: CoreDashboardComponent;
  let fixture: ComponentFixture<CoreDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
