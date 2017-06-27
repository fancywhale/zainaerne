import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IndexPage } from '../index';

@Component({
  selector: 'page-login',
  templateUrl: './login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  public login() {
    this.navCtrl.push(IndexPage);
  }
}
