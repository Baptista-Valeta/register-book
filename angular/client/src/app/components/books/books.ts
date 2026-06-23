import { Component } from '@angular/core';
import { FormBook } from '../form/form-book/form-book';
import { BooksService } from '../../services/books';

@Component({
  selector: 'app-books',
  imports: [FormBook],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  data: string = new Date().toDateString();
  infoBooks: any[] = []

  constructor(public booksServices: BooksService) {}

  ngOnInit(): void {
    this.booksServices.books$
      .subscribe(books => {
        // this.books = books;
        console.log("De books component",books);
        this.infoBooks.push(books);
        console.log("infoBooks:",this.infoBooks)
      });
      
  };

};  