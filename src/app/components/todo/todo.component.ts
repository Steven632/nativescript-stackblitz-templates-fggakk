import { Component, OnInit } from '@angular/core';
import { Todo } from '~/app/services/todo.model';
import { TodoService } from '~/app/services/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  public todoData: any;

  constructor() {}

  ngOnInit() {}

  public toggleCompletion() {
    this.todoData.completed = !this.todoData.completed;
  }
}

//   todoListFinal: Todo[];

//   constructor(private todoService: TodoService) {
//     this.todoListFinal = this.todoService.getAllTodos();
//   }
// ngOnInit(): void {
// throw new Error('Method not implemented.');
// }

//   addTodo() {
//     console.log('TAPPING');
//     this.todoService.generateRandomTodo();
//   }
// }
