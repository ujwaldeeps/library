import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books.service";
import { Book } from "../book.model";
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    book: Book;
    id: number;

    constructor(private bookService: BooksService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.book = this.bookService.getBook(this.id);
                }
            );
    }

    onEditRecipe() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }

    onDeleteRecipe() {
        this.bookService.deleteBook(this.id);
        this.router.navigate(['/books']);
    }
}
