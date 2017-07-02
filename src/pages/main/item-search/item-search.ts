import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchResultPage } from '../search-result/search-result';

@Component({
  selector: 'item-search-page',
  templateUrl: './item-search.html',
})
export class ItemSearchPage {

  constructor(
    private _navCtrl: NavController,
  ) { }

  public search() {
    this._navCtrl.push(SearchResultPage);
  }
}
