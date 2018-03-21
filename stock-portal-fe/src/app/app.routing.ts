import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ModuleWithProviders } from "@angular/core";
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./authentication/login/login.component";
import { LandingPageComponent } from './landing-page/landing-page.component';

import { AuthGuard } from "./authentication/auth.gaurd";

export const routes: Routes = [{
      path: 'profile',
      loadChildren : "./user-profile/user-profile.module#UserProfileModule",
      canActivate: [AuthGuard],
    },{
      path: 'login',
      component: LoginComponent
    },{
      path: 'landing',
      component: LandingPageComponent
    }

];


export const AppRouting: ModuleWithProviders =
     RouterModule.forRoot(routes, {useHash: true});
