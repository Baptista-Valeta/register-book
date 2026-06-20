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
  infoBooks: any[] = [
    {
      name: "Algoritmos",
      ano: 2026
    },
    {
      name: "IA",
      ano: 2022
    },
    {
      name: "Matemathics",
      ano: 2020
    },
    {
      name: "Computation",
      ano: 1998
    }

  ]
  constructor() {}

};