import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from './service/user.service';
import {AuthService} from './auth/auth.service';
import {EcUser} from './service/user/user.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private db: AngularFirestore) {

    this.authService.authState$.subscribe(user => {
      this.db
        .collection<EcUser>('/users', ref => ref.where('email', '==', user.email))
        .valueChanges()
        .subscribe((next: EcUser[]) => {
          this.isAdmin = next[0].role === 'admin';
        });
    }, error => {
      // do nothing ignore
    });
  }

  isAdmin = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAdmin;

    // return this.authService.user != null;
    // return this.userService.getCurrentUser().subscribe(it => it[0].role === 'admin');
  }

  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  // return this.authService.authState$.pipe(
  //     map(state => {
  //         return true;
  // if (state !== null) { return true; }
  // this.router.navigate(['/login']);
  // return false;
  // }));
  // }
}
