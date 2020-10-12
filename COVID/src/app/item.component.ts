import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'item-app',
    template: `<h3>Модель {{id}}</h3>`
})

export class ItemComponent {

id: number;
private subscription: Subscription;

constructor(private activateRoute: ActivatedRoute){
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id'])
}

}