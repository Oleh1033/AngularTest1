import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransfer6Component } from './data-transfer6.component';

describe('DataTransfer6Component', () => {
  let component: DataTransfer6Component;
  let fixture: ComponentFixture<DataTransfer6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTransfer6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTransfer6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
