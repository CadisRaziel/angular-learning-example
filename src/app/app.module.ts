import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ComponentFilhoComponent } from './components/component-filho/component-filho.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { CondicionaisComponent } from './components/condicionais/condicionais.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ComponentFilhoComponent,
    DiretivasComponent,
    CondicionaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
