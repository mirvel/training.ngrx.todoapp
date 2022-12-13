import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { decrement, increment, reset } from './counter.actions';
import { addItem, removeItem } from 'actions/item.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo.list.ng13';
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
  newId() {
    return Math.floor(Math.random() * (300 - 200)) + 200;
  }
  addItem(val: string) {
    this.store.dispatch(addItem({ item: { id: this.newId(), title: 'some data', completed: false } }));
  }
  removeItem(val: string) {
    this.store.dispatch(removeItem({ id: parseInt(val) }));
  }
}
