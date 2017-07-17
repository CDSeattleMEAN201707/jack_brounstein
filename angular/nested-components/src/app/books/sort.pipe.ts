import { Pipe, PipeTransform } from '@angular/core';

import { Book } from "./book"

@Pipe({
  name: 'sort',
  pure: false,
  
})
export class SortPipe implements PipeTransform {

  transform(book_array: Array<Book>, field: any): any {
    return book_array.sort((a,b) => {
      if (a[field] < b[field]){
        return -1
      } else if (a[field] > b[field]){
        return 1
      } else {
        return 0
      }
    } );
  }

}
