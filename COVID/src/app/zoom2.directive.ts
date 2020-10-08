import {Directive, Input, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[zoom2]'
})

export class Zoom2Directive{
    @Input('zoomSize') size

    constructor(private el:ElementRef) {}

    @HostListener('mouseenter') onMouseEnter(){
        this.setFontSize(this.size);
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setFontSize(14);
    }

setFontSize(value: number | string): void{
    this.el.nativeElement.style.fontSize = `${value}px`
}

}