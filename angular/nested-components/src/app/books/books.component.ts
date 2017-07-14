import { Component, OnInit } from '@angular/core';

import { Book } from "./book"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Array<Book>

  constructor() { }

  ngOnInit() {
    this.books = [
      {title: "Emma", author: "Jane Austen", pages: 400},
      {title: "Gone Girl", author: "Gillian Flynn", pages: 250},
    ]
  }

  create_book(new_book){
    console.log("Create event happened?")
    this.books.push(new_book)
    // this.new_book = new Book
  }

}
