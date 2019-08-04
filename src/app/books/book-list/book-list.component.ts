import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BooksService } from '../books.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books: Book[];
    subscription: Subscription;

    constructor(private bookService: BooksService,
                private router: Router,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.subscription = this.bookService.booksChanged
            .subscribe(
                (books: Book[]) => {
                    console.log(books);
                    this.books = books;
                }
            );
        this.books = this.bookService.getBooks();
    }

    onNewBook() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
