import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { Configuration } from 'msal';
import { MsalAngularConfiguration, MsalModule, MsalService, MSAL_CONFIG, MSAL_CONFIG_ANGULAR } from '@azure/msal-angular';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

function MSALConfigFactory(): Configuration {
  return {
    auth: {
      clientId: environment.clientId,
      authority: environment.authority,
      validateAuthority: true,
      redirectUri: environment.redirectUrl,
      postLogoutRedirectUri: environment.redirectUrl,
      navigateToLoginRequestUrl: true
    },
    cache: {
      storeAuthStateInCookie: false,
    }
  };
}

function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return {
    popUp: false
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_CONFIG,
      useFactory: MSALConfigFactory
    },
    {
      provide: MSAL_CONFIG_ANGULAR,
      useFactory: MSALAngularConfigFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
