import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/item.model';

export const removeItem = createAction(
  '[Item Component] Remove',
  props<{ id: number }>()
);
export const clearAll = createAction('[Item Component] Clear');
export const addItem = createAction(
  '[Item Component] Add',
  props<{ item: Todo }>()
);
