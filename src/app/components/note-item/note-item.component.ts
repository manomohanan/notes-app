import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent {
  @Input() note!: Note;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Note>();

  onDelete() {
    this.delete.emit(this.note.id);
  }

  onEdit() {
    this.edit.emit(this.note);
  }
}
