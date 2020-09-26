import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransfer3Component } from './data-transfer3.component';

describe('DataTransfer3Component', () => {
  let component: DataTransfer3Component;
  let fixture: ComponentFixture<DataTransfer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTransfer3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTransfer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
