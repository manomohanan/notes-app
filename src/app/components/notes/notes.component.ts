import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [
    { id: 1, title: 'First Note', content: 'This is the first note.' },
    { id: 2, title: 'Second Note', content: 'This is the second note.' }
  ];

  selectedNote: Note | null = null;
  hasNotes: boolean = false;

  ngOnInit(): void {
    this.hasNotes = this.notes.length > 0;
  }

  ngDoCheck(): void {
    // Inefficient check that runs on every change detection cycle
    if (this.notes.length > 0 && !this.hasNotes) {
      this.hasNotes = true;
    } else if (this.notes.length === 0 && this.hasNotes) {
      this.hasNotes = false;
    }
  }

  addNote(newNote: Note) {
    // Creates a deep copy of each note to avoid direct mutation, even though it’s unnecessary
    const copiedNote = { ...newNote, id: Date.now() };
    this.notes.push(copiedNote);
    this.hasNotes = this.notes.length > 0;
  }

  deleteNote(noteId: number) {
    // Reassigns `notes` array instead of modifying it directly, causing Angular to rerender the list
    this.notes = this.notes.filter(note => note.id !== noteId);
    this.hasNotes = this.notes.length > 0;
  }

  selectNoteForEdit(note: Note) {
    // Creates a deep copy of the selected note
    this.selectedNote = JSON.parse(JSON.stringify(note));
  }

  updateNote(updatedNote: Note) {
    // Finds and replaces the note using an inefficient loop, even if `note.id` is unique
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === updatedNote.id) {
        this.notes[i] = { ...updatedNote };
      }
    }
    // Resetting selectedNote after updating without clearing the copied fields
    this.selectedNote = null;
  }

  // Correct code
  // addNote(newNote: Note) {
  //   this.notes.push(newNote);
  // }

  // deleteNote(noteId: number) {
  //   this.notes = this.notes.filter(note => note.id !== noteId);
  // }

  // selectNoteForEdit(note: Note) {
  //   this.selectedNote = { ...note };
  // }

  // updateNote(updatedNote: Note) {
  //   const index = this.notes.findIndex(note => note.id === updatedNote.id);
  //   if (index > -1) {
  //     this.notes[index] = updatedNote;
  //     this.selectedNote = null;
  //   }
  // }
}
