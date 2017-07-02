import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/main/home/home';
import { UserPage } from '../pages/main/user/user';
import { CardPage } from '../pages/main/card/card';
import { IndexPage } from '../pages/index';
import { GuidePage } from '../pages/guide/guide';
import { Guide2Page } from '../pages/guide/guide2';
import { GuideRootPage } from '../pages/guide/index';
import { LoginPage } from '../pages/login/login';
import { TypeSelectorPage } from '../pages/type-selector/type-selector';
import { ValidationPage } from '../pages/validation/validation';
import { MainPage } from '../pages/main/main';
import { MainService } from '../pages/main/main.service';
import { ItemSearchPage } from '../pages/main/item-search/item-search';
import { SearchResultPage } from '../pages/main/search-result/search-result';
import { ItemDetailPage } from '../pages/main/item-detail/item-detail';
import { SharedModule } from '../shared/shared.module';
import { MapPage } from '../pages/main/map/map';

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
  TypeSelectorPage,
  ValidationPage,
  MainPage,
  ItemSearchPage,
  SearchResultPage,
  ItemDetailPage,
  MapPage,
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
    IonicModule.forRoot(MyApp, APP_CONFIG),
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: APP_PAGES,
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MainService,
  ]
})
export class AppModule {}
