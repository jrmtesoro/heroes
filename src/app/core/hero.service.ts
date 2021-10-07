import { Injectable } from '@angular/core';

import { Hero } from '../pages/heroes/shared/hero.model';
import { HEROES } from '../pages/heroes/shared/hero-seeder';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
