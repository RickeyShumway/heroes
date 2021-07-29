import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedHero?: Hero;
  heroes= HEROES;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
