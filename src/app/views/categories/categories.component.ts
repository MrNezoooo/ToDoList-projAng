import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];


  constructor(private dataHandler: DataHandlerService) {
  } /*Внідряєм DataHandlerService*/

  /* метод викличется автоматично післястворення(ініцілізації) компонента*/
  ngOnInit() {  /*В методі ngOnInit ми реалізували отримання цього масива*/
    this.categories = this.dataHandler.getCategories();
    /*його викличе але дані ніде не збережутся тому треба вище створити масив categories: Category[]; */
    console.log(this.categories)
  }

  showTasksByCategory(category: Category) {
    this.dataHandler.fillTasksByCategory(category)
  }




}

