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

  getPriority(): Priority[] {
    return TestData.priorities;
  }
}
