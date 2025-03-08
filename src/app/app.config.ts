import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { contadorReduce } from './contador/contador.reduce';
import { provideStoreDevtools } from '@ngrx/store-devtools';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ counter: contadorReduce }),
    provideStoreDevtools({
      maxAge: 25,
      // logOnly: environment.production,
    })
  ]
};
