import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'cs-back-button',
  template: `
    <ion-buttons>
      <button ion-button icon-only clear (click)="goBack()">
        <ion-icon name="arrow-back"></ion-icon>
      </button>
    </ion-buttons>
  `,
  styles: [
    `
      ion-buttons {
        position:fixed;
        left: 0px;
        top: 0px;
      }
    `
  ]
})
export class CSBackButton {
  constructor(
    private _navCtrl: NavController,
  ) { }

  public goBack() {
    this._navCtrl.pop();
  }
}
