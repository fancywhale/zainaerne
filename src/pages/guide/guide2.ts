import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { SKIP_EVENT } from './index';

@Component({
  selector: 'page-guide2',
  template: `
  <ion-content>
    guide2
  </ion-content>
  `
})
export class Guide2Page {

  constructor(
    private events: Events
  ) { }
}
