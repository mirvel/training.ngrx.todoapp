import { createAction, props } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from './item.model';

export interface TodosState extends EntityState<Todo> { }

export const itemAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

