import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTransferComponent } from './components/data-transfer/data-transfer.component';
import { DataTransfer2Component } from './components/data-transfer2/data-transfer2.component';
import { DataTransfer3Component } from './components/data-transfer3/data-transfer3.component';



@NgModule({
  declarations: [
    AppComponent,
    DataTransferComponent,
    DataTransfer2Component,
    DataTransfer3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
