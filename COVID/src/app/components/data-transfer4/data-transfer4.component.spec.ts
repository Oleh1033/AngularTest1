import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransfer4Component } from './data-transfer4.component';

describe('DataTransfer4Component', () => {
  let component: DataTransfer4Component;
  let fixture: ComponentFixture<DataTransfer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTransfer4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTransfer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
