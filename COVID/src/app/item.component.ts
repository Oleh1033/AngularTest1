import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'item-app',
    template: `<h3>Модель {{id}}</h3>
    <div>Товар: {{product}}</div>
                <div>Ціна: {{price}}</div>`
})

export class ItemComponent {

id: number;
private routeSubscription: Subscription;
private querySubscription: Subscription;
product: string;
price: string;

constructor(private activateRoute: ActivatedRoute){
    this.routeSubscription = activateRoute.params.subscribe(params => {
        this.id = params['id'];
    });

    this.querySubscription = activateRoute.queryParams.subscribe((queryParam: any) => {
        console.log(queryParam)
        this.product = queryParam['product'];
        this.price = queryParam['price'];
    })
}

}