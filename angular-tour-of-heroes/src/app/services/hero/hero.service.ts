import { Injectable } from '@angular/core';

// class
import { Hero } from '../../classes/hero';

// datas
import { HEROES } from '../../datas/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
  	return HEROES;
  }
}
