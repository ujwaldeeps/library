import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {BookDetailComponent} from "./books/book-detail/book-detail.component";
import {BookEditComponent} from "./books/book-edit/book-edit.component";
import {IceAndFireBooksComponent} from "./ice-and-fire-books/ice-and-fire-books.component";
import {BookStartComponent} from "./books/book-start/book-start.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent, children: [
    { path: '', component: BookStartComponent },
    { path: 'new', component: BookEditComponent },
    { path: ':id', component: BookDetailComponent },
    { path: ':id/edit', component: BookEditComponent },
  ] },
  { path: 'ice-and-fire', component: IceAndFireBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
