import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Hero } from '../shared/hero.model';
import { HeroService } from '../../../core/hero.service';

import { MatDialog } from '@angular/material/dialog';
import { HeroCreateComponent } from '../hero-create/hero-create.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  dataSource = new MatTableDataSource<Hero>();
  tableTitle: string = 'My Heroes';
  displayedColumns: string[] = ['id', 'name', 'actions'];
  creating: boolean = false;

  constructor(private heroService: HeroService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.index();
  }

  index(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.dataSource = new MatTableDataSource(heroes);
    });
  }

  store(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
      this.dataSource = new MatTableDataSource(this.heroes);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  openDialog() {
    const dialogRef = this.dialog.open(HeroCreateComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.store(result);
      console.log(`Dialog result: ${result}`);
    });
  }
}
