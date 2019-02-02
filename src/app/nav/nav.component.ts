import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {BasketService} from '../service/basket.service';
import {EcUser} from '../service/user/user.model';
import {AuthService} from '../auth/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  basketItems = 0;
  basketSum = 0;
  isAdminField = false;
  isEmployeeField = false;

  constructor(
    private userService: UserService,
    private basketService: BasketService,
    private authService: AuthService,
    private db: AngularFirestore
  ) {
  }

  ngOnInit() {
    this.basketItems = this.basketService.getBasketSize().itemsSum;
    this.basketSum = this.basketService.getBasketSize().priceSum;
    // const userObservable = this.userService.getCurrentUser();
    // if (userObservable == null) {
    //   this.isAdminField = false;
    // } else {
    //   this.isAdminField = (it[0].role === 'admin');
    //   this.isEmployeeField = (it[0].role === 'employee');
    // }

    this.authService.authState$.subscribe(user => {
      this.db
        .collection<EcUser>('/users', ref => ref.where('email', '==', user.email))
        .valueChanges()
        .subscribe((next: EcUser[]) => {
          this.isEmployeeField = next[0].role === 'employee';
          this.isAdminField = next[0].role === 'admin';
        });
    }, error => {
      // do nothing ignore
    });
  }

  isAdmin() {
    return this.userService.getCurrentUser().subscribe(it => this.isAdminField = (it[0].role === 'admin'));
  }

  logout() {
    return this.authService.logout();
  }
}
