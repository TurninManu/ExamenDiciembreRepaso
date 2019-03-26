import { Movie } from './../../modelo/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallePeliculaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-pelicula',
  templateUrl: 'detalle-pelicula.html',
})
export class DetallePeliculaPage {

  pelicula:Movie;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pelicula=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePeliculaPage');
  }

}
