import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './service/user.service';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService,
        private userService: UserService) { }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // return this.userService.getCurrentUser().role === "admin";
    // }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.authState$.pipe(
            map(state => {
                return true;
                // if (state !== null) { return true; }
                // this.router.navigate(['/login']);
                // return false;
            })
        );
    }
}