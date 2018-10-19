import { Component, OnInit } from '@angular/core';
import { Student } from '../hero';
import { MoreStudents } from '../hero';
import { HeroService } from '../services/hero.service';

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

	all_students: Student[];
	
	all_students_via_file = MoreStudents;

	all_students_via_obserable_service: Student[];

	

	constructor(private heroService: HeroService) { }

	getAllStudents(): void {
		this.all_students = this.heroService.getStudents();
	}

	getAllStudentsHTTP(): void {
	  	this.heroService.getStudentsthroughhttp()
	      .subscribe(heroes => {    
	      // alert(); 
	      	// heros is dynamic variable in which i am getting response from getStudentsthroughhttp function.
	      	this.all_students_via_obserable_service = heroes
	      });
	}

	ngOnInit()
	{
		this.getAllStudents();
		this.getAllStudentsHTTP();
	}

	selectedValue: Student;

	onSelect(construct_variable: Student): void {
		this.selectedValue = construct_variable;
	}
}