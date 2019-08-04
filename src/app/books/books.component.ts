import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apis/api.service';
import {BooksService} from "./books.service";
import {Book} from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private apiService: ApiService, private bookService: BooksService) { }

  ngOnInit() {
      this.apiService.getBooks().subscribe(response => {
        console.log(response);
          this.bookService.setBooks(response.data);
      });
  }

}
