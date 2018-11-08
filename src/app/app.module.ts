import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material.module';
import { AppHeaderComponent } from './ui/header-component';
import { ChaptersComponent } from './pages/chapters/chapters.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { NotesComponent } from './pages/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    AppHeaderComponent,
    ChaptersComponent,
    ChapterComponent,
    DashbaordComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
