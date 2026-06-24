import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, config, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiUri: string = "http://localhost:3200/api/books";
  private detailsBooks = new BehaviorSubject([]);
  books$ = this.detailsBooks.asObservable();


  constructor (private http: HttpClient) {}

  
  getBooks() {
    return this.http.get(this.apiUri);
  };




  booksDetails(datas: any): void {

    console.log("observable",this.books$);

    this.detailsBooks.next(datas);

    console.log("Valor atual:",this.detailsBooks.getValue());
  };
  

  sendBooksDetails(books: any): void {

  };

};
