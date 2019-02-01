import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  template: '<h2>{{title}}</h2>'
})
export class CoursesComponent implements OnInit {


  title;

  constructor(service: CoursesService) {
    this.title = service.getCourses();
   }

  ngOnInit() {
  }



 getTitle()
 {
   return this.title;
 }


}
