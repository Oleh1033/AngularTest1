import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-transfer',
  templateUrl: './data-transfer.component.html',
  styleUrls: ['./data-transfer.component.scss']
})
export class DataTransferComponent implements OnInit {
@Input() userName: string;
@Input() userAge: number;
  constructor() { }

  ngOnInit(): void {
  }

}
