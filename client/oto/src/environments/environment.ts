// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as keys from '../app/keys/keys.json';
export const environment = {
  production: false,
  googleMapsKey: keys.googleMapsKey,
  firebase: {
    apiKey: keys.firebaseConfig.apiKey,
    authDomain: keys.firebaseConfig.authDomain,
    databaseURL: keys.firebaseConfig.databaseURL,
    projectId: keys.firebaseConfig.projectId,
    storageBucket: keys.firebaseConfig.storageBucket,
    messagingSenderId: keys.firebaseConfig.messagingSenderId
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
