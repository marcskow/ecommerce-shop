import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs/index';
import * as firebase from 'firebase/app';
import {UserService} from '../service/user.service';
import {EcUser} from '../service/user/user.model';
import {AngularFirestore} from '@angular/fire/firestore';

export interface Credentials {
    email: string;
    password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    readonly authState$: Observable<User | null> = this.fireAuth.authState;
    constructor(private fireAuth: AngularFireAuth,
                private userService: UserService,
                private db: AngularFirestore) {
      this.authState$.subscribe(user => {
        this.db
          .collection<EcUser>('/users', ref => ref.where('email', '==', user.email))
          .valueChanges()
          .subscribe((next: EcUser[]) => {
            this.userService.updateCurrentUser(next[0]);
          });
      }, error => {
        // do nothing ignore
      });
    }

    get user(): User | null {
        return this.fireAuth.auth.currentUser;
    }

    login({email, password}: Credentials) {
        return this.fireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => {
           return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
        });
    }

    register({email, password}: Credentials) {
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    logout() {
        return this.fireAuth.auth.signOut();
    }
}
