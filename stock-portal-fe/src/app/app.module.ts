import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from "./authentication/auth.gaurd";
import { AuthService } from "./authentication/auth.service";
import { AppRouting } from './app.routing';

import { AuthenticationModule } from "./authentication/authentication.module";

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRouting
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
