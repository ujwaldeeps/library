import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {BooksService} from "../books.service";
import moment from 'moment';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

    id: number;
    editMode = false;
    bookForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private bookService: BooksService,
                private router: Router) {
    }

    ngOnInit() {

        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.editMode = params['id'] != null;
                    this.initForm();
                }
            );
    }

    private initForm() {
        let bookName = '';
        let isbn = '';
        let country = '';
        let number_of_pages: number;
        let publisher = '';
        let release_date = '';
        let authors = new FormArray([]);

        if (this.editMode) {
            const book = this.bookService.getBook(this.id);
            bookName = book.name;
            isbn = book.isbn;
            country = book.country;
            number_of_pages = book.number_of_pages;
            publisher = book.publisher;
            release_date = book.release_date ? moment(book.release_date).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD');
            if (book['authors']) {
                for (let author of book.authors) {
                    authors.push(
                        new FormGroup({
                            'name': new FormControl(author),
                        })
                    );
                }
            }
        }

        this.bookForm = new FormGroup({
            'name': new FormControl(bookName, Validators.required),
            'country': new FormControl(country, Validators.required),
            'isbn': new FormControl(isbn, Validators.required),
            'number_of_pages': new FormControl(number_of_pages, Validators.required),
            'publisher': new FormControl(publisher, Validators.required),
            'release_date': new FormControl(release_date, Validators.required),
            'authors': authors
        });
    }

    formAuthors(form){
        return form.get('authors').controls;
    }

    onSubmit() {
        if (this.editMode) {
            this.bookService.updateBook(this.id, this.bookForm.value);
        } else {
            this.bookService.addBook(this.bookForm.value);
        }
        this.onCancel();
    }

    onAddAuthor() {
        (<FormArray>this.bookForm.get('authors')).push(
            new FormGroup({
                'name': new FormControl(null),
            })
        );
    }

    onDeleteAuthor(index: number) {
        (<FormArray>this.bookForm.get('authors')).removeAt(index);
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

}
