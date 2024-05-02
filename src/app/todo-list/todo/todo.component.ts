import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
//implements OnChanges
export class TodoComponent   {

 @Input() todo!: Todo;
 @Input() i!: number;
 @Output() delete = new EventEmitter<void>();

 openModal = false;

// ngOnChanges(changes: SimpleChanges): void {
//   console.log(changes);
  
    
// }

  changeTodoStatus(todo: Todo) {
    todo.isComplete = !todo.isComplete;
  }

  toggleModal(): void {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
