import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './components/books/books.component';
import { WishListComponent } from './components/books/wish-list/wish-list.component';
import { ReadingComponent } from './components/books/reading/reading.component';
import { HistoryComponent } from './components/books/history/history.component';

@NgModule({
  declarations: [AppComponent, TemplateFormComponent, ReactiveFormComponent, BooksComponent, WishListComponent, ReadingComponent, HistoryComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
