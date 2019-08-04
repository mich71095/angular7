import { Component, OnInit } from '@angular/core';

// classes
import { Hero } from '../../classes/hero';

// services
import { HeroService } from '../.././services/hero/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  /* Reserve the constructor for simple initialization such as 
  * wiring constructor parameters to properties. 
  * The constructor shouldn't do anything. 
  * It certainly shouldn't call a function that makes 
  * HTTP requests to a remote server as a real data service would.
  */
  constructor(
  	private heroService: HeroService
  ) { }

  ngOnInit() {
  	this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  getHeroes(): void {
  	this.heroService.getHeroes()
  		.subscribe(heroes => this.heroes = heroes);
  }

}
