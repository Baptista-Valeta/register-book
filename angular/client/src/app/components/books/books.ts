import { Component } from '@angular/core';
import { FormBook } from '../form/form-book/form-book';

@Component({
  selector: 'app-books',
  imports: [FormBook],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  data: string = new Date().toDateString();

  book = FormBook;

  
  constructor() {
    
    console.log(this.book)
  }

};