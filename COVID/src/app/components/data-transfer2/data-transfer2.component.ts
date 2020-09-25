import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-transfer2',
  templateUrl: './data-transfer2.component.html',
  styleUrls: ['./data-transfer2.component.scss']
})
export class DataTransfer2Component implements OnInit {
  @Output() btnChanged = new EventEmitter<boolean>();
  change(increased: any){
    this.btnChanged.emit(increased);
  }

  btn = true;

  constructor() { }

  ngOnInit(): void {
  }

}
