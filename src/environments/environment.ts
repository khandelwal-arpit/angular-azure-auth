// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId: '{YOUR-APP-CLIENT_ID}',
  authority: 'https://login.microsoftonline.com/{YOUR-APP-TENANT-ID}/',
  redirectUrl: 'http://localhost:4200/profile'
};
