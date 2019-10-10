import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoorButtonComponent } from './door-button/door-button.component';
import { DoorListComponent } from './door-list/door-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GarageService } from './garage.service';

@NgModule({
  declarations: [
    AppComponent,
    DoorButtonComponent,
    DoorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
