import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Priority} from "../model/Priority";
import {Task} from '../model/Task';

@Injectable({
  providedIn: 'root'
})

export class DataHandlerService {

  constructor() {
  }

  /*Методд дістає данні з масива*/
  getCategories(): Category[] {
    return TestData.categories;
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }

  /*фільтри по категоріям*/
  getTasksByCategory(category: Category): Task[] {
    const tasks = TestData.tasks.filter(value => value.category === category);  /*Ми будем проходити по всіх елементах масива Task[] value значення з масива Task[]*/
    /*Фільтровані всі задачі в якій category буде рівна переданій категорії.її ми будемо передавати з html сторінки*/
    return tasks
  }

}
