import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { itemReducer } from 'reducers/item.reducer';
import { LayoutComponent } from './layout/layout.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';

export const environment = {
  production: false,
  enableDevTools: true,
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NewTodoComponent,
    HeaderComponent,
    FooterComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, items: itemReducer }),
    environment.enableDevTools
      ? StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
      })
      : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
