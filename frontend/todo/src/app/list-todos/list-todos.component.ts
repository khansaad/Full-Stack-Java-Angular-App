import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo []

  message : string
    // new Todo(1,  'Learn to Dance', false, new Date()),
    // new Todo(2,  'Learn to Play Cricket', false, new Date()),
    // new Todo(3,  'Learn to Sing', false, new Date())
    // { id: 1, description: 'Learn to Dance'},
    // { id: 2, description: 'Learn to Play Cricket'},
    // { id: 3, description: 'Learn to Play Tennis'}
  //]
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }
  
  refreshTodos() {
    this.todoService.retrieveAllTodos('test').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`todo deleted ${id}`);
    this.todoService.deleteTodo('merc', id).subscribe(
      response => {
        console.log(response);
        this.message = `Todo ${id} deleted successfully!`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`todo ${id} updated`);
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
