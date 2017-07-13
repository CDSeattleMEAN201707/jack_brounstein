import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cool-stuff',
  templateUrl: './my-cool-stuff.component.html',
  styleUrls: ['./my-cool-stuff.component.css']
})
export class MyCoolStuffComponent implements OnInit {
  first_name: string = "Jack"
  cool_numbers: Array<number> 

  constructor() { }

  ngOnInit() {
  	this.first_name = "Alan"
  	this.cool_numbers = [19, 11, 13, 7, 5, 10, 2, 22/7]
  }

}
