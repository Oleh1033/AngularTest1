import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';

import { Routes, RouterModule } from '@angular/router';

//Прописування маршрутів
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '/about', component: AboutComponent },
  { path: '/**', component: NotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
