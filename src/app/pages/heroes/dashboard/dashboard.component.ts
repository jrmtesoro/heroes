import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/hero.model';

import { HeroService } from 'src/app/core/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tableTitle: string = 'Top Heroes';
  dataSource: Hero[] = [];
  displayedColumns: string[] = ['name'];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.dataSource = heroes.slice(0, 4)));
  }
}
