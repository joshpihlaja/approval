import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ApplicantPage } from '../pages/applicant/applicant';
import { JobPage } from '../pages/job/job';
import { PositionPage } from '../pages/position/position';
import { ProspectPage } from '../pages/prospect/prospect';
import { FormPage } from '../pages/form/form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { JobService } from '../pages/job/JobService';
import { FormService } from '../pages/form/FormService';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    ApplicantPage,
    JobPage,
    PositionPage,
	 ProspectPage,
	FormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
	HomePage,
    LoginPage,
    ApplicantPage,
    JobPage,
    PositionPage,
	  ProspectPage,
	FormPage
  ],
  providers: [
      StatusBar,
      SplashScreen,
      JobService,
      FormService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    
  ]
})
export class AppModule {}
