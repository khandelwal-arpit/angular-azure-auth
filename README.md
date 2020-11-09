<h1 align="center">
  <br>
  <a><img src="https://github.com/khandelwal-arpit/angular-azure-auth/blob/master/documentation/logo.png" alt="MSAL"></a>
  <br>
</h1>

# Angular MSAL Based Authentication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0. The objective of this project is to demonstrate authenticating Angular apps with Azure Active Directory using MSAL Angular 1.0.

## MSAL library
Microsoft released Version 1.0 of its Library for Angular that facilitates the implementation of OAuth 2.0 token based authentication into Azure Active Directory. The library was released on May 3rd 2020 ending a long phase of workarounds and beta versions of the Angular variant of the MSAL library for Single Page Applications (SPA).

## Prerequisites
- NPM, Angular CLI (v10)
- Azure AD, get your free Azure account here: https://azure.microsoft.com/en-us/free/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Environment Configurations

Replace the following in the environment.ts config with your application specific values:

- clientId: '{YOUR-APP-CLIENT_ID}',
- authority: 'https://login.microsoftonline.com/{YOUR-APP-TENANT-ID}/'

## Configure a new app registration in Azure AD

<p align="center">
    <b>Azure AD App Registrations</b><br>
    <br>
    <img width="600" src="https://github.com/khandelwal-arpit/angular-azure-auth/blob/master/documentation/MS-AD-1.png">
</p>

<p align="center">
    <b>Configure Redirect URI</b><br>
    <br>
    <img width="600" src="https://github.com/khandelwal-arpit/angular-azure-auth/blob/master/documentation/MS-AD-2.png">
</p>

<p align="center">
    <b>Configure SPA</b><br>
    <br>
    <img width="600" src="https://github.com/khandelwal-arpit/angular-azure-auth/blob/master/documentation/MS-AD-3.png">
</p>

<p align="center">
    <b>Client Id & Tenant Id</b><br>
    <br>
    <img width="600" src="https://github.com/khandelwal-arpit/angular-azure-auth/blob/master/documentation/MS-AD-4.png">
</p>

## Application Screenshots

<p align="center">
    <b>Launch Page</b><br>
    <br>
    <img width="600" src="https://github.com/khandelwal-arpit/angular-azure-auth/blob/master/documentation/pg-1.png">
</p>

<p align="center">
    <b>Login Page</b><br>
    <br>
    <img width="600" src="https://github.com/khandelwal-arpit/angular-azure-auth/blob/master/documentation/pg-2.png">
</p>

<p align="center">
    <b>Password Page</b><br>
    <br>
    <img width="600" src="https://github.com/khandelwal-arpit/angular-azure-auth/blob/master/documentation/pg-3.png">
</p>

<p align="center">
    <b>Profile Page</b><br>
    <br>
    <img width="600" src="https://github.com/khandelwal-arpit/angular-azure-auth/blob/master/documentation/pg-4.png">
</p>
