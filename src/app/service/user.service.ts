import { Injectable } from '@angular/core';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCurrentUser() {
    return new User("Marcin", "Skowron", "admin")
  }
}
