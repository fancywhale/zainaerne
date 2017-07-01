import { OnInit } from '@angular/core/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GuideRootPage } from './guide/index';

@Component({
  selector: 'page-index',
  template: `
    <ion-nav [root]="rootPage"></ion-nav>
  `,

})
export class IndexPage implements OnInit {

  public rootPage = GuideRootPage;

  constructor(
    private _navCtrl: NavController,
  ) { }

  public ngOnInit() {
  }
}
