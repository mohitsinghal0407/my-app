import { Component, OnInit } from '@angular/core';
import { Student, MoreStudents } from '../hero';

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
		name: 'Windstorm',
		roll: 145824
	};

	all_students = MoreStudents;

	constructor() { }

	ngOnInit()
	{
	}

	selectedValue: Student;

	onSelect(construct_variable: Student): void {
	  this.selectedValue = construct_variable;
	}
}