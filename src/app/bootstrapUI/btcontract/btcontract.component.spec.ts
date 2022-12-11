import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcontractComponent } from './btcontract.component';

describe('BtcontractComponent', () => {
  let component: BtcontractComponent;
  let fixture: ComponentFixture<BtcontractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtcontractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtcontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
