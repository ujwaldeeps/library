import { Component, OnInit } from '@angular/core';
import {Book} from "../../books/book.model";
import {Subscription} from "rxjs";
import {BooksService} from "../../books/books.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IceAndFireBooksService} from "../ice-and-fire-books.service";

@Component({
  selector: 'app-ice-and-fire-books-list',
  templateUrl: './ice-and-fire-books-list.component.html',
  styleUrls: ['./ice-and-fire-books-list.component.css']
})
export class IceAndFireBooksListComponent implements OnInit {

    books: Book[];
    subscription: Subscription;

    constructor(private bookService: IceAndFireBooksService) {}

    ngOnInit() {
        this.subscription = this.bookService.iceAndFireBooksChanged
            .subscribe(
                (books: Book[]) => {
                    this.books = books;
                }
            );
        this.books = this.bookService.getBooks();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
