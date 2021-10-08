import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './core/in-memory-data.service';
import { HeroListComponent } from './pages/heroes/hero-list/hero-list.component';
import { HeroEditComponent } from './pages/heroes/hero-edit/hero-edit.component';
import { HeroAuditLogComponent } from './pages/heroes/hero-audit-log/hero-audit-log.component';
import { DashboardComponent } from './pages/heroes/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroCreateComponent } from './pages/heroes/hero-create/hero-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroEditComponent,
    HeroAuditLogComponent,
    DashboardComponent,
    HeroCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
