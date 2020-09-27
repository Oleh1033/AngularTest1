import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-transfer3',
  templateUrl: './data-transfer3.component.html',
  styleUrls: ['./data-transfer3.component.scss']
})
export class DataTransfer3Component implements OnInit {

  constructor(){}

  @Input() userName: string;
  @Output() userNameChange = new EventEmitter<string>();
  
  onNameChange(model: string){
    this.userName = model;
    this.userNameChange.emit(model);
  }

 ngOnInit(){}

}
