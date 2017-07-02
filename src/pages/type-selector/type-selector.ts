import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ValidationPage } from '../validation/validation';

@Component({
  selector: 'type-selector-page',
  templateUrl: './type-selector.html',
})
export class TypeSelectorPage {
  public selectedPage: string = 'identifications';

  constructor(
    private _navCtrl: NavController,
  ) { }

  public tapEvent() {
    this._navCtrl.push(ValidationPage);
  }
}
