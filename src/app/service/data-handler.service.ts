import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";

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
}
