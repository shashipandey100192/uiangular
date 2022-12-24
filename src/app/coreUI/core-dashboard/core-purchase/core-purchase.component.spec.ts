import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorePurchaseComponent } from './core-purchase.component';

describe('CorePurchaseComponent', () => {
  let component: CorePurchaseComponent;
  let fixture: ComponentFixture<CorePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorePurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
