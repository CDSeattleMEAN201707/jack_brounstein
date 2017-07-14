import { Component, OnInit, Input } from '@angular/core';

import { Book } from "./../book"

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  @Input() book: Book

  constructor() { }

  ngOnInit() {
  	// this.book = {title: "The Fountainhead", author: "Ayn Rand", pages: 1200}
  }

}
