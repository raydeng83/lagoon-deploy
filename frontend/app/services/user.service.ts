import {User} from '../models/user';
import {Injectable} from 'angular2/core';
import {Photo} from '../models/photo';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class UserService {
  users: User[];

  constructor (private http: Http) {}

  getUsers() {
  }

  getUserById(id: string) {
  }

  getUserByName(username: string) {
    let tokenUrl1 = "http://127.0.0.1:8080/lagoon/rest/user/userName";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, username, {headers: headers1});
  }

  updateUser(user: User) {
    let tokenUrl1 = "http://127.0.0.1:8080/lagoon/rest/user/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
  }
}
