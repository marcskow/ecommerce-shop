import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  isAdmin() {
    return this.userService.getCurrentUser().role === "admin";
  }

}
