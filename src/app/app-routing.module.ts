import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './pages/heroes/hero-list/hero-list.component';
import { DashboardComponent } from './pages/heroes/dashboard/dashboard.component';
import { HeroEditComponent } from './pages/heroes/hero-edit/hero-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit/:id', component: HeroEditComponent },
  { path: 'herolist', component: HeroListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
