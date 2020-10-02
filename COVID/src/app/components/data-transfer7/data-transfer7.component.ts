import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-transfer7',
  templateUrl: './data-transfer7.component.html',
  styleUrls: ['./data-transfer7.component.scss']
})
export class DataTransfer7Component implements OnInit {

  constructor() { }

  @ContentChild("headerContent", {static: false})
  header: ElementRef;

  changeGreeting(){
    console.log(this.header)
    this.header.nativeElement.textContent = "Ласкаво просимо, Oleh!"
  }

  ngOnInit(): void {
  }

}
