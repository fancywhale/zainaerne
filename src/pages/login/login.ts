import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IndexPage } from '../index';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-login',
  templateUrl: './login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  public login() {
    this.navCtrl.setRoot(MainPage);
  }
}
