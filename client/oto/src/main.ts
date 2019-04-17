import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
console.log('environment.googleMapsKey:' + environment.googleMapsKey);
// document.write(`<script async defertype="text/javascript"
// src="https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsKey}}&libraries=geometry,places"></script>`);


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
