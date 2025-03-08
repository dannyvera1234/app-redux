import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Store } from '@ngrx/store';
interface AppState {
  counter: number;
}
@Component({
  selector: 'app-nieto',
  imports: [],
  templateUrl: './nieto.component.html',
  styleUrl: './nieto.component.css'
})
export class NietoComponent {
  public readonly contador = signal<any | null>(null);
  constructor(private store: Store<AppState>) {
      this.store.subscribe(state => {
        this.contador.set(state.counter);
      })
  }
reset() {
  this.store.dispatch({type: 'RESET'});
}
}
