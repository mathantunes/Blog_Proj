import { post } from './../../assets/interface';
import { HttpProvider } from './../../providers/http/http';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any;
  rform : FormGroup
  constructor(public navCtrl: NavController,
  private http:HttpProvider,
  private formbuilder : FormBuilder) {
    this.rform = this.formbuilder.group({
      'title' : [null, Validators.required],
      'subtitle' : [null],
      'url' : [null],
      'author' : [null, Validators.required],
      'likes' : [0],
      'name' : [null],
      'comments' : [[""]]
    })
  }

  public post(post:post){
    console.log(post)
    this.http.post(post);
  }

  

}
