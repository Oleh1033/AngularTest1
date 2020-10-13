import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';
import { ItemComponent } from './item.component';
import { ItemDetailsComponent } from './item-details.component';
import { ItemStatComponent } from './item-stat.component';

const itemRoutes: Routes = [
  {path: 'details', component: ItemDetailsComponent},
  {path: 'stat', component: ItemStatComponent}
]

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'not', component: NotFoundComponent },
  {path: 'item/:id', component: ItemComponent},
  {path: 'item/:id', component: ItemComponent, children: itemRoutes},
  { path: '**', redirectTo: '/' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
