import {
  App,
  NavController,
  Events,
} from 'ionic-angular';
import { Component } from '@angular/core';

import { Guide2Page } from './guide2';
import { SKIP_EVENT } from './index';

@Component({
  selector: 'page-guide',
  template: `
    <ion-content>
      The world is your oyster.
      <p>
        If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.
      </p>

      <ion-buttons>
        <button ion-button (click)="next()">下一步</button>
      </ion-buttons>
    </ion-content>
  `
})
export class GuidePage {

  constructor(
    public appCtrl: App,
    private navCtrl: NavController,
    private events: Events,
  ) { }

  public next() {
    this.navCtrl.push(Guide2Page);
  }
}
