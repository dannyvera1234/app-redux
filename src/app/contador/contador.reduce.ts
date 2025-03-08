import { Action } from "@ngrx/store";


export function contadorReduce(state: number = 10, action:any) {
  console.log('action', action);
  console.log('state', state);
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'DECREMENTAR':
      return state - 1;
    case 'MULTIPLICAR':
      return state * action.payload;
    case 'DIVIDIR':
      return state / action.payload;
    case 'RESET':
      return 0;

    default:
      return state;
  }
}


