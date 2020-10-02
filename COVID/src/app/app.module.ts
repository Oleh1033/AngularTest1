import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTransferComponent } from './components/data-transfer/data-transfer.component';
import { DataTransfer2Component } from './components/data-transfer2/data-transfer2.component';
import { DataTransfer3Component } from './components/data-transfer3/data-transfer3.component';
import { DataTransfer4Component } from './components/data-transfer4/data-transfer4.component';
import { DataTransfer5Component } from './components/data-transfer5/data-transfer5.component';
import { DataTransfer6Component } from './components/data-transfer6/data-transfer6.component';
import { DataTransfer7Component } from './components/data-transfer7/data-transfer7.component';



@NgModule({
  declarations: [
    AppComponent,
    DataTransferComponent,
    DataTransfer2Component,
    DataTransfer3Component,
    DataTransfer4Component,
    DataTransfer5Component,
    DataTransfer6Component,
    DataTransfer7Component,
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
