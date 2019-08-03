import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

// class
import { Hero } from '../../classes/hero';

// datas
import { HEROES } from '../../datas/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  /*
  * Asynchronous approach
  */
  getHeroes(): Observable<Hero[]> {
  	return of(HEROES);
  }
}
