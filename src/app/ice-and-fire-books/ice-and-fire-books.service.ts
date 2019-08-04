import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {ApiService} from "../apis/api.service";

@Injectable()
export class IceAndFireBooksService {
    iceAndFireBooksChanged = new Subject<any>();
    private iceAndFireBooks: any = [];

    constructor(private apiService: ApiService) {}

    setBooks(books: any) {
        this.iceAndFireBooks = books;
        this.iceAndFireBooksChanged.next(this.iceAndFireBooks.slice());
    }

    getBooks() {
        return this.iceAndFireBooks.slice();
    }

    getBook(name: string) {
        return this.apiService.getIceAndFireBooksByName(name);
    }

}