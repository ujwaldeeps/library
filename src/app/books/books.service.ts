import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from './book.model';
import {ApiService} from "../apis/api.service";

@Injectable()
export class BooksService {
    booksChanged = new Subject<Book[]>();
    private books: Book[] = [];

    constructor(private apiService: ApiService) {}

    setBooks(books: any) {
        this.books = books;
        this.booksChanged.next(this.books.slice());
    }

    getBooks() {
        return this.books.slice();
    }

    getBook(id) {
        return this.books.find((book) => book.id === id);
    }

    async addBook(book: Book) {

        const authors = book.authors.map(authorObj => {
            return authorObj.name;
        })

        book.authors = authors;
        console.log(book);
        this.apiService.addNewBook(book).subscribe(response => {
            console.log(response);
            if(response.status_code === 201) {
                this.books.push(response.data);
                this.booksChanged.next(this.books.slice());
            }
        });
    }

    updateBook(id: number, book: Book) {
        const authors = book.authors.map(authorObj => {
            return authorObj.name;
        })

        book.authors = authors;
        this.apiService.updateBook(id, book).subscribe(response => {
            console.log(response);
            if(response.status_code === 200) {
                const book = this.books.find(book => { book.id === response.data.id})
                Object.assign(book, response.data);
                this.booksChanged.next(this.books.slice());
            }
        });
    }

    deleteBook(id) {
        this.apiService.deleteBook(id).subscribe(response => {
            console.log(response);
            if(response.status_code === 200) {
                for (const i in this.books) {
                    if (this.books[i].id === id) {
                        this.books.splice(i, 1);
                    }
                }

                alert(response.message);
                this.booksChanged.next(this.books.slice());
            }
        });
    }
}