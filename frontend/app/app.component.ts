import {Component} from 'angular2/core';
import {HomeComponent} from './components/home.component';
import {UserService} from './services/user.service';
import {PhotoService} from './services/photo.service';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ImageDetail} from './components/image-detail.component'
import {NavBar} from './components/nav-bar.component';
import {Login} from './components/login.component';
import {LoginService} from './services/login.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import {MyAlbum} from './components/my-album.component';
import {Register} from './components/register.component'
import {RegisterService} from './services/register.service';
import {AddPhoto} from './components/add-photo.component';
import {UploadPhotoService} from './services/upload-photo.service';

@Component({
    selector: 'my-app',
    providers:[UserService, PhotoService, ROUTER_PROVIDERS, HTTP_PROVIDERS, LoginService, RegisterService, UploadPhotoService],
    directives: [HomeComponent, ROUTER_DIRECTIVES, NavBar, Login, MyAlbum, Register, AddPhoto],
    templateUrl: 'app/app.component.html'
})
@RouteConfig([
  {path: '/home', name: 'Home', component: HomeComponent, useAsDefault:true},
  {path: '/image-detail/:id', name: 'ImageDetail', component: ImageDetail},
  {path: '/login', name: 'Login', component:Login},
  {path: '/my-album', name: 'MyAlbum', component:MyAlbum},
  {path: '/register', name: "Register", component: Register},
  {path: '/add-photo', name:"AddPhoto", component: AddPhoto }
])
export class AppComponent {
}
