import { Component } from '@angular/core';
import { bookModel } from '../../../models/book.model';
import { JsonPipe } from '@angular/common';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-form-book',
  imports: [JsonPipe, FormsModule],
  templateUrl: './form-book.html',
  styleUrl: './form-book.css',
})
export class FormBook {
  
  book: bookModel = {
    id: 1,
    title: "algoritms",
    author: "bv",
    year: 2026
  };

  submited = false;

  onSubmit () {
    this.submited = true;
  };
  
  constructor(book: FormBook) {

    return book;
  };
  
}
