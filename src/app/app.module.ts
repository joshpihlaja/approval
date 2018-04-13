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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { JobService } from '../pages/job/JobService'

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
    ProspectPage
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
    ProspectPage
  ],
  providers: [
      StatusBar,
      SplashScreen,
      JobService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    
  ]
})
export class AppModule {}
