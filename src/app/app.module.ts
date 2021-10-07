import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroListComponent } from './pages/heroes/hero-list/hero-list.component';
import { HeroEditComponent } from './pages/heroes/hero-edit/hero-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
