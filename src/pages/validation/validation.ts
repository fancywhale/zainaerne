import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemSearchPage } from '../main/item-search/item-search';

@Component({
  templateUrl: './validation.html',
  selector: 'validation-page'
})
export class ValidationPage {

  constructor(
    private _navCtrl: NavController,
  ) { }  

  public register() {
    this._navCtrl.push(ItemSearchPage);
  }
}
