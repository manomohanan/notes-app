import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './components/notes/notes.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteItemComponent } from './components/note-item/note-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AddNoteComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
