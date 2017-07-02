import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BaiduMapModule } from 'angular2-baidu-map';

import { CSBackButtonModule } from './components/back-button/index';


const SHARED_MODULES = [
  CSBackButtonModule,
  FlexLayoutModule,
  BaiduMapModule
];

@NgModule({
  imports: SHARED_MODULES,
  exports: SHARED_MODULES
})
export class SharedModule { }
