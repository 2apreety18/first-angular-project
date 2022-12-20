
// export class HeroesComponent {
//   // hero: Hero = {
//   //    id:1,
//   //    name : 'Windstorm'
//   // };
//   heroes = HEROES;
//   // for button clicking
//   selectedHero?: Hero;
//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }
// }

import { Component } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent{
 // heroes = HEROES;
  selectedHero?: Hero;
 
  //defining heroes differently
  heroes: Hero[] = []; 
  constructor(private heroService: HeroService, private messageService: MessageService){}
  // method to retrieve the heroes from the service.
              /*Sync*/
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
       /*Async*/
  getHeroes(): void {
    this.heroService.getHeroes().subscribe (heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}