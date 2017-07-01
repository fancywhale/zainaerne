import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

@Injectable()
export class MainService {
  private _navCtrl: NavController;

  constructor(
  ) { }
  
  public set navCtrl(value: NavController) {
    this._navCtrl = value;
  }

  public get navCtrl() {
    return this._navCtrl;
  }
}
