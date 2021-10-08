import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/hero.model';
import { HeroService } from '../../../core/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  dataSource: Hero[] = [];
  tableTitle: string = 'My Heroes';
  displayedColumns: string[] = ['id', 'name'];

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.dataSource = heroes));
  }

  editHero(hero: Hero): void {
    this.router.navigate([`edit/${hero.id}`]);
  }
}
