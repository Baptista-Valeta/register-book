import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { __values } from 'tslib';

import { BooksService } from '../../../services/books';


@Component({
  selector: 'app-form-book',
  imports: [ ReactiveFormsModule ],
  templateUrl: './form-book.html',
  styleUrl: './form-book.css',
})
export class FormBook {
  formBooks = new FormGroup({
    title: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ] ),
    
    author: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),

    category: new FormControl('', []), // sem required é ignorado o valor do category

    year: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });


  get title() {
    return this.formBooks.get("title");
  };

  get author() {
    return this.formBooks.get("author");
  };

  get year() {
    return this.formBooks.get('year');
  };


  constructor(public books_services: BooksService) {}

  onSubmitBooks() {  
    const books = this.formBooks.value

    // this.books_services.booksDetails(books);
  };

  onResetFormBooks() {
    this.formBooks.reset();
  }

};
