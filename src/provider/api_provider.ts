import { Configuration } from './../modelo/configuration';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { Movie } from '../modelo/movie';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  configuration: Configuration;

  constructor(public http: HttpClient,
              public events:Events) {
  }

  getMovies(search: string){
    this.getConfiguration();
    this.events.subscribe('getConfiguration', (configuration) => {
      this.configuration=configuration;
      console.log(configuration);
      this.getDataMovies(search).subscribe(
          data => {  //success
              let movies: Movie[];
              movies=data['results'];
              for(let movie of movies){
                if(movie.poster_path!=null){
                    movie.poster_path=this.configuration.secure_base_url+'w92'+movie.poster_path;
                }
              }
              this.events.publish('getMovies',movies)
          },
          err => {
            this.events.publish('getMovies',new Array<Movie>())
          }
        );
      });
  }
  

  getDataMovies(movieName: string) {
    var url = 'http://api.themoviedb.org/3/search/movie?query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var data = this.http.get(url);
    return data;
  } 

  getConfiguration(){
    this.getDataConfiguration().subscribe(
      data => {  //success
          this.events.publish('getConfiguration',data['images'])
      },
      err => {
          console.log(err);
      }
    );
  }

  getDataConfiguration(){
    var url = 'http://api.themoviedb.org/3/configuration?api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var data = this.http.get(url);
    return data;
  }
}
