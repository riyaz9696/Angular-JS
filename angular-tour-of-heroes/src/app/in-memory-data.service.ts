import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
createDb(){
  const heroes =[
  {id: 11 , name:'Mr.Nice'},
  {id: 11 , name:'Mr.Nice'},
  {id: 11 , name:'Mr.Nice'},
  {id: 11 , name:'Mr.Nice'},
  {id: 11 , name:'Mr.Nice'},
  {id: 11 , name:'Mr.Nice'},
  {id: 11 , name:'Mr.Nice'},
  ]
}
  constructor() { }
}
}
