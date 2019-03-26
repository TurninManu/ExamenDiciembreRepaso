import { User } from './../../modelo/user';
import { PeliculasPage } from './../peliculas/peliculas';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formu:FormGroup;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.formu=new FormGroup({
        fecha:new FormControl('',Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$')
        ])),
        dni:new FormControl('',Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]{8}[T, R, W, A, G, M, Y, F, P, D, X, B, t, r, w, a, g, m, y, f, p, d, x, b]$')
        ]))
    });
  }

  public login(){
    if(parseInt(this.formu.value["fecha"].substring(0,4))<2000){
      this.navCtrl.push(PeliculasPage, new User(this.formu.value["fecha"], this.formu.value["dni"]));
    }else{
      let alert=this.alertCtrl.create({
        title: 'ERROR',
        subTitle: 'La fecha debe ser inferior al 1 de enero del 2000',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

}
