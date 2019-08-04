import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiService } from './apis/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookComponent } from './books/book-list/book/book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksService } from './books/books.service';
import { IceAndFireBooksComponent } from './ice-and-fire-books/ice-and-fire-books.component';
import { AppRoutingModule } from './app-routing.module';
import {IceAndFireBooksService} from "./ice-and-fire-books/ice-and-fire-books.service";
import { IceAndFireBooksListComponent } from './ice-and-fire-books/ice-and-fire-books-list/ice-and-fire-books-list.component';
import { IceAndFireBookComponent } from './ice-and-fire-books/ice-and-fire-books-list/ice-and-fire-book/ice-and-fire-book.component';
import { BookStartComponent } from './books/book-start/book-start.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookComponent,
    NavbarComponent,
    IceAndFireBooksComponent,
    IceAndFireBooksListComponent,
    IceAndFireBookComponent,
    BookStartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService, BooksService, IceAndFireBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
