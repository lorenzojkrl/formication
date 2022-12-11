import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { BooksComponent } from './components/books/books.component';
import { WishListComponent } from './components/books/wish-list/wish-list.component';
import { ReadingComponent } from './components/books/reading/reading.component';
import { HistoryComponent } from './components/books/history/history.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { SubjectComponent } from './components/rxjs/subject/subject.component';
import { AlbumsComponent } from './components/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    BooksComponent,
    WishListComponent,
    ReadingComponent,
    HistoryComponent,
    HeaderComponent,
    FormsComponent,
    HomeComponent,
    SubjectComponent,
    AlbumsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
