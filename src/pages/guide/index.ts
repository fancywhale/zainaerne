import { Component, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GuidePage } from './guide';
import { LoginPage } from '../login/login';

export const SKIP_EVENT = 'guide.skip';

@Component({
  selector: 'page-guide-root',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          用户引导
        </ion-title>
        <ion-buttons end>
          <button ion-button (click)="dismiss()">
            跳过
          </button>
        </ion-buttons>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <ion-nav [root]="rootPage"></ion-nav>
    </ion-content>
  `
})
export class GuideRootPage implements OnDestroy {

  public rootPage = GuidePage;


  constructor(
    private _navCtrl: NavController,
  ) {
  }

  public ngOnDestroy() {
  }

  public dismiss() {
    this._navCtrl.setRoot(LoginPage);
  }
}
