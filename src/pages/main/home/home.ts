import { Component, SkipSelf } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TypeSelectorPage } from '../../type-selector/type-selector';
import { MainService } from '../main.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private _mainService: MainService,
  ) { }

  public seekOnClick() {
    this._mainService.navCtrl.push(TypeSelectorPage);
  }

}
