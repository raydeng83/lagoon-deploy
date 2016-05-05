import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'nav-bar',
  directives: [ROUTER_DIRECTIVES],
  providers: [LoginService],
  templateUrl:'app/components/nav-bar.component.html'
})
export class NavBar{

  myLocalStorage;

  constructor (private loginService:LoginService) {
    this.myLocalStorage=localStorage;
  }

  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }

}
