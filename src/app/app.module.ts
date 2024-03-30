import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/components/counter.module';
import { HeroModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
