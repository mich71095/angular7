import { Component, OnInit } from '@angular/core';

// class
import { Hero } from '../../classes/hero';

// datas
import { HEROES } from '../../datas/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }

}
