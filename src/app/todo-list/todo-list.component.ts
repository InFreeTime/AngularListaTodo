import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { TodoService } from '../core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges {

  @Input() test! : string;

  
  todos:Todo[]=this.todoServices.todos;
  errorMessage = '';

  constructor(private todoServices: TodoService){};

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      
  }
  
  
  addTodo(todo: string):void{
    if(todo.length <=3){
      this.errorMessage = 'Zadanie powinno mieć co najmniej 4 znaki!';
      return;
    }
  
    this.todoServices.addTodo(todo);
    this.todos = this.todoServices.todos;
  }
  
  
  
  
  
  clearErrorMessage(){
    this.errorMessage = '';
  }


  deleteTodo(i: number) {
  
    this.todoServices.deleteTodo(i);
    this.todos = this.todoServices.todos;


  }

}