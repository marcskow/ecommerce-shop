import {Injectable} from '@angular/core';
import {EcUser} from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = null;

  constructor() {
  }

  getCurrentUser() {
    return this.currentUser;
    // if (this.currentUser == null) { return null; }
    //
    // const currentUserEmail = this.authService.user.email;
    // return this.db
    //   .collection<{ email: string, role: string }>('/users', ref => ref.where('email', '==', currentUserEmail))
    //   .valueChanges();
  }

  updateCurrentUser(user: EcUser) {
    this.currentUser = user;
  }
}
