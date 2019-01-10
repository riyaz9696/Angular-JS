import { Injectable } from '@angular/core'; 
// import { Observable} from 'rxjs/Observable';
// import "rxjs/add/observable/of"
import { Observable, of } from 'rxjs';
// import { Observable } from "rxjs/Rx";
import { of as observableof } from 'rxjs/observable/of'
 
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
}
 
@Injectable()
export class HeroService {
 
  constructor(
  private http: HttpClient,
  private messageService: MessageService,
  private log(message: string){
  this.messageService.add('HeroService: ${message}');
  }
  ) { }
 
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}



 

   
  

