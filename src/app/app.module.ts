import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesComponent} from './views/categories/categories.component';
import {TasksComponent} from './views/tasks/tasks.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,

    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,

    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
