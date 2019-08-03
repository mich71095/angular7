import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

// class
import { Hero } from '../../classes/hero';

// datas
import { HEROES } from '../../datas/mock-heroes';

// services
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
  	private messageService: MessageService
  ) { }

  /*
  * Asynchronous approach
  */
  getHeroes(): Observable<Hero[]> {
  	this.messageService.add('Heroservice: fetched heroes');
  	return of(HEROES);
  }
}
