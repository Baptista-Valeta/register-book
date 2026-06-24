import { Component } from '@angular/core';
import { FormBook } from '../form/form-book/form-book';
import { BooksService } from '../../services/books';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  imports: [FormBook],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  data: string = new Date().toDateString();
  infoBooks: any;

  constructor(public booksServices: BooksService) {}

  ngOnInit() {
    this.booksServices.getBooks().subscribe(datas => {
      this.infoBooks = datas
      console.log(this.infoBooks)
    });

  };

};  