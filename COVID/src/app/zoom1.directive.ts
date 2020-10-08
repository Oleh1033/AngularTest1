import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[zoom1]'
})

export class Zoom1Derective{
    constructor(private el: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.setFontSize(30);
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setFontSize(16);
    }

    setFontSize(size: number | string): void{
        this.el.nativeElement.style.fontSize = `${size}px`
    }

}