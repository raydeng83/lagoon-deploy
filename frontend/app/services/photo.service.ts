import {Injectable} from 'angular2/core';
import {Photo} from '../models/photo';
import {Http, Headers} from 'angular2/http';
import {User} from '../models/user';



@Injectable()
export class PhotoService {

  constructor (private http:Http){}

  getPhotos() {
    let url = "http://127.0.0.1:8080/lagoon/photo/allPhotos";
    return this.http.get(url);
  }

  getPhotoById (photoId: number) {
    let tokenUrl1 = "http://127.0.0.1:8080/lagoon/rest/photo/photoId";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(photoId), {headers: headers1});
  }

  getPhotosByUser (user: User) {
    let tokenUrl1 = "http://127.0.0.1:8080/lagoon/rest/photo/user";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
  }

  updatePhoto(photo: Photo) {
    let tokenUrl1 = "http://127.0.0.1:8080/lagoon/rest/photo/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(photo), {headers: headers1});
  }

  // simpleStringify (object){
  //   var simpleObject = {};
  //   for (var prop in object ){
  //     if (!object.hasOwnProperty(prop)){
  //       continue;
  //     }
  //     if (typeof(object[prop]) == 'object'){
  //       continue;
  //     }
  //     if (typeof(object[prop]) == 'function'){
  //       continue;
  //     }
  //     simpleObject[prop] = object[prop];
  //   }
  //   return JSON.stringify(simpleObject); // returns cleaned up JSON
  // };
  //
  // censor(censor) {
  //   var i = 0;
  //
  //   return function(key, value) {
  //     if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value)
  //     return '[Circular]';
  //
  //     if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
  //     return '[Unknown]';
  //
  //     ++i; // so we know we aren't using the original object anymore
  //
  //     return value;
  //   }
  // }
}
