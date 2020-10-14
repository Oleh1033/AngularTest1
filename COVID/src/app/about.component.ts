import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from './exit.about.guard';

@Component({
    selector: 'about-app',
    template: `<h3>Про сайт</h3>
    <button class="btn btn-default" (click)="save()">Зберегти</button>
    <a routerLink="">На головну</a>`
})

export class AboutComponent implements ComponentCanDeactivate{

saved: boolean = false;

save(){
    this.saved = true;
}

    canDeActivate(): Observable<boolean> | boolean{
        if(!this.saved){
           return confirm('Ви впевнені, що не хочете зберігати дані?');
        } else {
            return true;
        }
    }
}