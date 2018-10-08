import { Component, OnInit } from '@angular/core';
import { Student } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

	/* simple variable here */
	hero_variable = {
	    id: 1,
	    name: 'Windstorm',
	    roll_no: '121121'
	};

	simple_variable: string = "helo";

	group_variable: Student = {
		id: 1,
		name: 'Windstorm'
	};

	constructor() { }

	ngOnInit()
	{
	}
}