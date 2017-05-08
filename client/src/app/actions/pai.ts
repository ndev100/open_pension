import { Action } from '@ngrx/store';
import { Pai } from '../models/pai';
import { type } from '../util';

export const LOAD_PAI =  '[PAI] Load Pai';
export const LOAD_PAI_SUCCESS = '[PAI] Load Pai Success';

export class LoadPaiAction implements Action {
  readonly type = LOAD_PAI;
  type = ActionTypes.LOAD_PAI;
  payload: any;

  constructor() { }
}

export class LoadPaiSuccessAction implements Action {
  readonly type = LOAD_PAI_SUCCESS;

  constructor(public payload: Pai) { }
}

export type Actions
  = LoadPaiAction
  | LoadPaiSuccessAction;
