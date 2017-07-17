import { Pipe, PipeTransform } from '@angular/core';

import { Book } from "./book"

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(book_array: Array<Book>, search: string): Array<Book> {
    // let output = []

    search = search.toLowerCase()

    // for(var i = 0; i < book_array.length; i++){
    // 	if(book_array[i].title.toLowerCase().includes(search) || book_array[i].author.toLowerCase().includes(search)){
    // 		output.push(book_array[i])
    // 	}
    // }

    return book_array.filter(book => {
    	return book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search)
    })

    // return output
  }

}
