import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

import { Book } from "./../book"

@Component({
  selector: 'app-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.css']
})
export class BooksCreateComponent implements OnInit, OnChanges {
  new_book: Book = new Book
  @Output() create_event = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    
  }

  create_book(){
    this.create_event.emit(this.new_book)
    this.new_book = new Book
  }

}
