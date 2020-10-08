import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[zoom]'
})

export class ZoomDirective{
    constructor(private element: ElementRef){
        this.element.nativeElement.style.fontSize = '20px';
    }



}