import { state } from '@angular/animations';
import { EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as ItemActions from './item.actions';
import { itemAdapter } from './item.adapter';
import { Todo } from './item.model';

export interface State extends EntityState<Todo> {
    // additional entities state properties
    selectedItemId: string | null;
}
export const initialState: State = itemAdapter.getInitialState({
    // additional entity state properties
    selectedItemId: null,
});
export const itemReducer = createReducer(
    initialState,
    on(ItemActions.addItem, (state, { item }) => {
        return itemAdapter.addOne(item, state)
    }),
    on(ItemActions.removeItem, (state, { id }) => {
        return itemAdapter.removeOne(id, state)
    }),
    on(ItemActions.clearAll, (state) => {
        return itemAdapter.removeAll(state)
    }),
);