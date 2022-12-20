import { Component, Input } from '@angular/core'; //importing Input
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  //property binding
  //getting input info as child from Parent & adding hero property
  @Input() hero?: Hero; 
}
