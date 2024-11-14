import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {
  @Input() noteToEdit: Note | null = null;
  @Output() add = new EventEmitter<Note>();
  @Output() update = new EventEmitter<Note>();
  
  newTitle = '';
  newContent = '';

  ngOnChanges() {
    if (this.noteToEdit) {
      this.newTitle = this.noteToEdit.title;
      this.newContent = this.noteToEdit.content;
    }
  }

  onSubmit() {
    if (this.noteToEdit) {
      this.update.emit({
        id: this.noteToEdit.id,
        title: this.newTitle,
        content: this.newContent
      });
    } else {
      const newNote: Note = { 
        id: Date.now(), 
        title: this.newTitle, 
        content: this.newContent 
      };
      this.add.emit(newNote);
    }
    this.resetForm();
  }

  resetForm() {
    this.newTitle = '';
    this.newContent = '';
  }
}
