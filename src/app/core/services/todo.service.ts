import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  private _todos:Todo[] = JSON.parse(localStorage.getItem('todos')!) ?? [];

  constructor() {}
    
    
    public get todos(){
      return this._todos.slice(); //kopia tablicy
    }

    addTodo(name: string):void{
      this._todos.push({name:name, isComplete:false});
      this.saveToLocalStorage();
    }


    deleteTodo(i: number) {
      this._todos = this.todos.filter((todo :Todo, index :number) => index !==i)
      this.saveToLocalStorage();
    }

    saveToLocalStorage(){
      localStorage.setItem('todos', JSON.stringify(this.todos));

    }
   
}
