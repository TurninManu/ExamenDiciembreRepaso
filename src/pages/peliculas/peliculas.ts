import { DetallePeliculaPage } from './../detalle-pelicula/detalle-pelicula';
import { User } from './../../modelo/user';
import { Movie } from './../../modelo/movie';
import { ApiProvider } from './../../provider/api_provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';

/**
 * Generated class for the PeliculasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peliculas',
  templateUrl: 'peliculas.html',
})
export class PeliculasPage {

  peliculas:Movie[];
  cadenaBusqueda: string;
  usuario:User;

  constructor(public navCtrl: NavController, 
    public events:Events,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    public apiProvider:ApiProvider) {

      this.peliculas=new Array<Movie>();
      this.usuario=navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeliculasPage');
  }

  public buscar(){
    this.apiProvider.getMovies(this.cadenaBusqueda);
    this.events.subscribe("getMovies", (movies) => {this.peliculas=movies});
  }

  public puntuacion(indice:number){
    let alert=this.alertCtrl.create({
      title: 'Valorar',
      inputs: [
        {
          name: 'voto',
          type: 'number',
          placeholder: 'voto',
          min: 0,
          max: 9,
        }
      ],
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            if(data['voto']>=0 && data['voto']<=9){
              console.log(this.peliculas[indice].id +", " + this.peliculas[indice].title + ", "+
              this.usuario.dni +  ", "+ data['voto'])
              return true;
            }else
              return false; 
          }
        }
      ]
    });
    alert.present();
  }

  public abrirPelicula(pelicula:Movie){
    this.navCtrl.push(DetallePeliculaPage, pelicula)
  }

}
