import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransfer5Component } from './data-transfer5.component';

describe('DataTransfer5Component', () => {
  let component: DataTransfer5Component;
  let fixture: ComponentFixture<DataTransfer5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTransfer5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTransfer5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
