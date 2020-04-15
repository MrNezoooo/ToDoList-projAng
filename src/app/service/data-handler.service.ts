import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Priority} from "../model/Priority";
import {Task} from '../model/Task';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks)
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories)


  constructor() {
  }

  /*Методд дістає данні з масива*/
  getCategories(): Category[] {
    return TestData.categories;
  }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks)
  }

  /*фільтри по категоріям*/

  /*fillTasksByCategory(category: Category): Task[] {
    const tasks = TestData.tasks.filter(value => value.category === category);  /!*Ми будем проходити по всіх елементах масива Task[] value значення з масива Task[]*!/
    /!*Фільтровані всі задачі в якій category буде рівна переданій категорії.її ми будемо передавати з html сторінки*!/
    return tasks
  }*/

  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(value1 => value1.category === category);
    this.tasksSubject.next(tasks);
  }

}
