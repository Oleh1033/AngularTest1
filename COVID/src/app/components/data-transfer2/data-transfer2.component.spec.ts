import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransfer2Component } from './data-transfer2.component';

describe('DataTransfer2Component', () => {
  let component: DataTransfer2Component;
  let fixture: ComponentFixture<DataTransfer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTransfer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTransfer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
