import {Injectable} from "angular2/core";
import {Http, Headers} from 'angular2/http';
import {User} from '../models/User';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class RegisterService {
  constructor (private http: Http) {}

  sendUser(user:User) {
    let url = "http://127.0.0.1:8080/lagoon/user/register";
    let headers1 = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, JSON.stringify(user), {headers: headers1});
  }
}
