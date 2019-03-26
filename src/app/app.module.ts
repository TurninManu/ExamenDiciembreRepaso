import { DetallePeliculaPage } from './../pages/detalle-pelicula/detalle-pelicula';
import { ApiProvider } from './../provider/api_provider';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasPage } from './../pages/peliculas/peliculas';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PeliculasPage,
    DetallePeliculaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PeliculasPage,
    DetallePeliculaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
