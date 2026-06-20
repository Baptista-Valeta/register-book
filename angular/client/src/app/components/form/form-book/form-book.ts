import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { bookModel } from '../../../models/book.model';
import { __values } from 'tslib';


@Component({
  selector: 'app-form-book',
  imports: [ ReactiveFormsModule ],
  templateUrl: './form-book.html',
  styleUrl: './form-book.css',
})
export class FormBook {
  title = new FormControl("Baptista Valeta");
  nome: string = "Valeta";

  form = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    year: new FormControl(),
  });

    
  updateTitle(): void {
    alert(this.form.value.author)
  } 

  onSubmit() {  
    console.warn(this.form.value);
  }

}


const form = new FormBook();

console.log(form.title.value)