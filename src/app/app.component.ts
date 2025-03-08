import { Component, signal } from '@angular/core';
import { HijoComponent } from "./contador/hijo/hijo.component";
import { Store } from '@ngrx/store';
import { DECREMENTAR, INCREMENTAR } from './contador/contador.actions';
interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  imports: [ HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public readonly contador = signal<any | null>(null);

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe(state => {
      this.contador.set(state);
    });
  }


  imcrementar(){
    this.store.dispatch({type: INCREMENTAR});

  }

  decrementar(){
    this.store.dispatch({type: DECREMENTAR});
  }
}
