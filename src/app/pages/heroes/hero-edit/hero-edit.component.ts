import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
  @Input() hero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
