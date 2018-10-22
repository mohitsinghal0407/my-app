import { Injectable } from '@angular/core';
import { Student, MoreStudents } from '../hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  	constructor(private messageService: MessageService) { }


  	getStudents(): Student[] 
  	{
		  return MoreStudents;
	  }

	  getStudentsthroughhttp(): Observable<Student[]> 
  	{
  		this.messageService.add('HeroService: fetched heroes');
  		return of(MoreStudents);
	  }
}
