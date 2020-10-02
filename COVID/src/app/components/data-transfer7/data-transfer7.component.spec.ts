import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransfer7Component } from './data-transfer7.component';

describe('DataTransfer7Component', () => {
  let component: DataTransfer7Component;
  let fixture: ComponentFixture<DataTransfer7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTransfer7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTransfer7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
