import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './service/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'ecommerce';

  constructor(private userService: UserService) {}

  ngOnInit() {
  }
}
