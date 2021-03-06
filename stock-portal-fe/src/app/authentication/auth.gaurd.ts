import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public auth: AuthService, private router: Router) {}

    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
    }
}