import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiUri: string = "http://localhost:3200/api/books";
  private detailsBooks = new BehaviorSubject([]); // o que faz um behaviorSubject ???
  books$ = this.detailsBooks.asObservable();


  constructor (private http: HttpClient) {}

  onInit(): void {

  }

  booksDetails(datas: any): void {
    console.log("observable",this.books$);
    this.detailsBooks.next(datas); // oque faz o next() ??? 
    console.log("Valor atual:",this.detailsBooks.getValue());

    this.http.get(this.apiUri).subscribe((datas) => {
      console.log("Dados do servidor: ",datas)
    })
  };

  sendBooksDetails(books: any): void {

  }

};
