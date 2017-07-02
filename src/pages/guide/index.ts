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

    <ion-content>
      <ion-slides pager [parallax]="true">

        <ion-slide>
          <h2>Slide 1</h2>
        </ion-slide>

        <ion-slide>
          <h2>Slide 2</h2>
        </ion-slide>

        <ion-slide>
          <h2>Slide 3</h2>
        </ion-slide>

      </ion-slides>
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
