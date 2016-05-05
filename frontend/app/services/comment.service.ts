import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Comment} from '../models/comment';

@Injectable()
export class CommentService {

  constructor (private http:Http) {}

  addComment(comment: Comment) {
    let tokenUrl1 = "http://127.0.0.1:8080/lagoon/rest/comment/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    console.log(JSON.stringify(comment));
    return this.http.post(tokenUrl1, JSON.stringify(comment), {headers: headers1});
  }
}
