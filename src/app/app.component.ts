import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
import { delay } from "rxjs/operators";
import { Todo, TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todoTitle = ''
  loading = false
  todos: Todo[] = []

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    }

    this.todosService.addTodo(newTodo)
      .subscribe(todo => {
        console.log('todo', todo);
        this.todos.push(todo)
        this.todoTitle = ''
      })
  }

  fetchTodos() {
    this.loading = true
    this.todosService.fetchTodos()
      .subscribe(todos => {
        console.log('Response', todos)
        this.todos = todos
        this.loading = false
      })
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(i => i.id !== id)
      })
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id)
      .subscribe(() => {
        this.todos.find(i => i.id === id)
          .completed = true
      })
  }
}

