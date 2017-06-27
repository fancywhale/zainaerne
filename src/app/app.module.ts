import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';
import { CardPage } from '../pages/card/card';
import { IndexPage } from '../pages/index';
import { GuidePage } from '../pages/guide/guide';
import { Guide2Page } from '../pages/guide/guide2';
import { GuideRootPage } from '../pages/guide/index';
import { LoginPage } from '../pages/login/login';

const APP_PAGES = [
  MyApp,
  HomePage,
  UserPage,
  CardPage,
  IndexPage,
  GuidePage,
  Guide2Page,
  GuideRootPage,
  LoginPage,
];

const APP_CONFIG = {
  backButtonText: '返回',
  iconMode: 'ios',
  modalEnter: 'modal-slide-in',
  modalLeave: 'modal-slide-out',
  tabsPlacement: 'bottom',
  pageTransition: 'ios-transition',
  mode: 'ios'
};

@NgModule({
  declarations: APP_PAGES,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, APP_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: APP_PAGES,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
