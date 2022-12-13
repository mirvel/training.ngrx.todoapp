import { createAction, props } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from 'src/app/models/item.model';

export interface TodosState extends EntityState<Todo> {}

export const itemAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();
