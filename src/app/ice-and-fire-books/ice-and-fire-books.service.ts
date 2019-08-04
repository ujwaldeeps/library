import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class IceAndFireBooksService {
    iceAndFireBooksChanged = new Subject<any>();
    private iceAndFireBooks: any = [];

    constructor() {}

    setBooks(books: any) {
        this.iceAndFireBooks = books;
        this.iceAndFireBooksChanged.next(this.iceAndFireBooks.slice());
    }

    getBooks() {
        return this.iceAndFireBooks.slice();
    }

}