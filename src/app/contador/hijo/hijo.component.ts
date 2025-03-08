import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { NietoComponent } from '../nieto';
import { Store } from '@ngrx/store';
interface AppState {
  counter: number;
}

@Component({
  selector: 'app-hijo',
  imports: [NietoComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {


  public readonly contador = signal<any | null>(null);

 constructor(private store: Store<AppState> ) {
  this.store.subscribe(state => {
    this.contador.set(state.counter);
  })
 }

  multiplicar() {
    this.store.dispatch({type: 'MULTIPLICAR', payload: 2} );
  }

  dividir(){
    this.store.dispatch({type: 'DIVIDIR', payload: 2});

  }

}
