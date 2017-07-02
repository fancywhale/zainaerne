import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'search-result-page',
  templateUrl: './search-result.html'
})
export class SearchResultPage {
  constructor(
    private _navCtrl: NavController,
  ) { }

  public viewItem() {
    this._navCtrl.push(ItemDetailPage);
  }
}
