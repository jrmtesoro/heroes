import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../pages/heroes/shared/hero.model';
import { HEROES } from '../pages/heroes/shared/hero-seeder';
import { AuditLogService } from './audit-log.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private auditLogService: AuditLogService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.auditLogService.add('Loading Heroes');
    return heroes;
  }
}
