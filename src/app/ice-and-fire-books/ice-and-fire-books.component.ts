import { Component, OnInit } from '@angular/core';
import {IceAndFireBooksService} from './ice-and-fire-books.service';
import {ApiService} from "../apis/api.service";

@Component({
  selector: 'app-ice-and-fire-books',
  templateUrl: './ice-and-fire-books.component.html',
  styleUrls: ['./ice-and-fire-books.component.css']
})
export class IceAndFireBooksComponent implements OnInit {
  constructor(private apiService: ApiService, private iceAndFireBooksService: IceAndFireBooksService) { }


  searchBook (nameOfBook){
      if(nameOfBook) {
          this.apiService.getIceAndFireBooksByName(nameOfBook).subscribe(
              response => {
                  console.log(response);
                  this.iceAndFireBooksService.setBooks(response.data);
              }
          );
      } else {
          this.getAllBooks();
      }
  }

  getAllBooks() {
      this.apiService.getIceAndFireBooks().subscribe(response=> {
          this.iceAndFireBooksService.setBooks(response.data);
      });
  }

  ngOnInit() {
      this.getAllBooks();
  }

}
