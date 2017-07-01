import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserPage } from './user/user';
import { CardPage } from './card/card';
import { HomePage } from './home/home';
import { MainService } from './main.service';
import { TypeSelectorPage } from '../type-selector/type-selector';

@Component({
  template: `
    <ion-menu [content]="content" type="overlay">
      <ion-content>
        菜单
      </ion-content>
    </ion-menu>
    <ion-tabs #content>
      <ion-tab tabTitle="首页" tabIcon="heart" [root]="homePage"></ion-tab>
      <ion-tab tabTitle="地图" tabIcon="map" [root]="homePage"></ion-tab>
      <ion-tab tabTitle="购卡" tabIcon="star" [root]="cardPage"></ion-tab>
      <ion-tab tabTitle="我" tabIcon="person" [root]="userPage"></ion-tab>
    </ion-tabs>
  `,
  selector: 'main-page',
})
export class MainPage {
  public homePage = HomePage;
  public userPage = UserPage;
  public cardPage = CardPage;

  constructor(
    private _mainService: MainService,  
    private _navCtrl: NavController,
  ) { 
    this._mainService.navCtrl = this._navCtrl;
  }
}
