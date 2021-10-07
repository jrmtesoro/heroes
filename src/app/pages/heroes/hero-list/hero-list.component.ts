import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/hero.model';
import { HEROES } from '../shared/hero-seeder';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
