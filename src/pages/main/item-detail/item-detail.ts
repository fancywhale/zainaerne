import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'item-detail-page',
  templateUrl: './item-detail.html'
})
export class ItemDetailPage {
  constructor(
    private _navCtrl: NavController,
  ) { }
}
