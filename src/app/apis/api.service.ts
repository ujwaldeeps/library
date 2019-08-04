import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }
    private baseUrl = 'http://localhost:8080/api'
    getIceAndFireBooks() {
        return this.http.get( this.baseUrl + '/external-books');
    }

    getIceAndFireBooksByName(name) {
        return this.http.get( this.baseUrl + '/external-books', {
            params: {
                name
            }
        });
    }


    getBooks() {
        return this.http.get( this.baseUrl + '/v1/books');
    }

    updateBook(id, updateDetails) {
        return this.http.patch( this.baseUrl + '/v1/books/' + id, updateDetails);
    }

    deleteBook(id) {
        return this.http.delete( this.baseUrl + '/v1/books/' + id);
    }

    addNewBook(book) {
        return this.http.post( this.baseUrl + '/v1/books', book);
    }
}