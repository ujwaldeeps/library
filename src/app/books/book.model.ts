import {ɵNgNoValidate} from "@angular/forms";

export class Book {
    public id: number;
    public name: string;
    public isbn: string;
    public country: string;
    public publisher: string;
    public number_of_pages: number;
    public release_date: string;
    public authors: Array<string>;


    constructor(id: number,release_date: string, number_of_pages: number, name: string, publisher: string, country: string, authors: Array<string>) {
        this.id = id;
        this.name = name;
        this.country = publisher;
        this.publisher = country;
        this.authors = authors;
        this.number_of_pages = number_of_pages;
        this.release_date = release_date;
    }
}