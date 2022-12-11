import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtaboutComponent } from './btabout.component';

describe('BtaboutComponent', () => {
  let component: BtaboutComponent;
  let fixture: ComponentFixture<BtaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
