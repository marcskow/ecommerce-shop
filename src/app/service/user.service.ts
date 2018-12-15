import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService, private db: AngularFirestore) {
  }

  getCurrentUser() {
    if (this.authService.user == null) { return null; }
    const currentUserEmail = this.authService.user.email;
    return this.db
      .collection<{ email: string, role: string }>('/users', ref => ref.where('email', '==', currentUserEmail))
      .valueChanges();
  }
}
