import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './pages/heroes/hero-list/hero-list.component';
import { HeroEditComponent } from './pages/heroes/hero-edit/hero-edit.component';
import { HeroAuditLogComponent } from './pages/heroes/hero-audit-log/hero-audit-log.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroEditComponent,
    HeroAuditLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
