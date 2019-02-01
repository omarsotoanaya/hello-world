import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getAuthors()
  {
    return ["author 1", "author 2", "author 2"];
  }

}
