import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {UserDetails} from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserDetails = new UserDetails('', '', '');

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login({email: this.user.email, password: this.user.password})
      .then((res) => {
        this.router.navigate(['admin']);
      })
      .catch((err) => console.log(err));
  }

}
