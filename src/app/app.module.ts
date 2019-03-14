import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserEventComponent } from './components/browser-event/browser-event.component';
import { EventBusComponent } from './components/event-bus/event-bus.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsCounterComponent } from './components/lessons-counter/lessons-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventComponent,
    EventBusComponent,
    LessonsListComponent,
    LessonsCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
