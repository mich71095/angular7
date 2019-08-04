import { Component, OnInit } from '@angular/core';

// rxjs
import { Observable, Subject } from 'rxjs';
import {
	debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

// classes
import { Hero } from '../../classes/hero';

//services
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  private searchTerms = new Subject<string>();

  heroes$: Observable<Hero[]>;

  constructor(
  	private heroService: HeroService
  ) { }

  ngOnInit(): void {
  	this.heroes$ = this.searchTerms.pipe(
  		// wait 300ms after earch keystroke before considering the term
  		debounceTime(300),

  		// ignore new term if same as previous term
  		distinctUntilChanged(),

  		// switch to new search observable each time the term changes
  		switchMap((term: string) => this.heroService.searchHeroes(term)),
  	);
  }

  /*
  * Push a search term into the observable stream
  */
  search(term: string): void {
  	this.searchTerms.next(term);
  }

}
