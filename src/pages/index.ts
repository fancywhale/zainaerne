import { OnInit } from '@angular/core/core';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';
import { CardPage } from '../pages/card/card';
import { GuideRootPage } from './guide/index';

@Component({
  selector: 'page-index',
  template: `
    <ion-menu [content]="content" type="overlay">
      <ion-content>
        菜单
      </ion-content>
    </ion-menu>
    <ion-tabs #content>
      <ion-tab tabTitle="数据" tabIcon="heart" [root]="homePage"></ion-tab>
      <ion-tab tabTitle="购卡" tabIcon="star" [root]="cardPage"></ion-tab>
      <ion-tab tabTitle="我" tabIcon="person" [root]="userPage"></ion-tab>
    </ion-tabs>
  `,

})
export class IndexPage implements OnInit {
  public homePage = HomePage;
  public userPage = UserPage;
  public cardPage = CardPage;

  constructor(
    private _navCtrl: NavController,
    private _modalCtrl: ModalController,
  ) { }

  public ngOnInit() {
    let modal = this._modalCtrl.create(GuideRootPage);
    modal.present();
  }
}
