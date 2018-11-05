import { post } from './../../assets/interface';
import { DetailPage } from './../detail/detail';
import { HttpProvider } from './../../providers/http/http';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  posts;

  constructor(public navCtrl: NavController,
    private http : HttpProvider,
    private modal : ModalController) {

  }

  async getAllPosts(){
    await this.http.get().subscribe(data => {
      console.log(data)
      this.posts = data;
     });
  }
  ionViewDidLoad(){
    this.getAllPosts()
   }

   openModal(post : post) { 
    const modal = this.modal.create(DetailPage.name, { post: post});
    modal.present();
    modal.onDidDismiss(() => {
      this.getAllPosts()
    })
  }

  doRefresh(event){
    this.getAllPosts()
    event.complete()
  }
}
