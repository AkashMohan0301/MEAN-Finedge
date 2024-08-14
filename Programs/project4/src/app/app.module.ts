import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationsComponent } from './operations/operations.component';
import { TablesComponent } from './tables/tables.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { ValiationComponent } from './valiation/valiation.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    OperationsComponent,
    TablesComponent,
    PeoplesComponent,
    ValiationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
