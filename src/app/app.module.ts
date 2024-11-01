import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ComponentFilhoComponent } from './components/component-filho/component-filho.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { CondicionaisComponent } from './components/condicionais/condicionais.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { MudarNumeroEventComponent } from './components/mudar-numero-event/mudar-numero-event.component';
import { ListsForComponent } from './components/lists-for/lists-for.component';
import { PipeOperatorComponent } from './components/pipe-operator/pipe-operator.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ListServiceComponentComponent } from './components/list-service-component/list-service-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ComponentFilhoComponent,
    DiretivasComponent,
    CondicionaisComponent,
    EventosComponent,
    EmitterComponent,
    MudarNumeroEventComponent,
    ListsForComponent,
    PipeOperatorComponent,
    TwoWayBindingComponent,
    ListServiceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
