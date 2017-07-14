import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksDetailComponent } from './books/books-detail/books-detail.component';
import { BooksCreateComponent } from './books/books-create/books-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksDetailComponent,
    BooksCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
