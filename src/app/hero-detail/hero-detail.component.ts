import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	@Input() student: Student;

  	constructor() { }

 	ngOnInit() {
 	
 	}

}
