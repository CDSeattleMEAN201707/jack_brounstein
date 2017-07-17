import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Book } from "./book"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit {
  books: Array<Book>
  search_text: string = ""

  constructor() { }

  ngOnInit() {
    this.books = [
      {title: "Emma", author: "Jane Austen", pages: 400},
      {title: "Gone Girl", author: "Gillian Flynn", pages: 250},
      {title: "The Fountainhead", author: "Ayn Rand", pages: 1250}
    ]
  }

  create_book(new_book){
    console.log("Create event happened?")
    this.books.push(new_book)
    // this.new_book = new Book
  }

}
