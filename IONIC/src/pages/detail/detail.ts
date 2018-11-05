import { HttpProvider } from './../../providers/http/http';
import { post } from './../../../www/assets/interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  post : post;
  liked;
  comment = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HttpProvider, private viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    this.post = this.navParams.get('post');
  }

  like(post : post){
    if(this.liked) {
      return
    }
    this.liked = true;
    this.http.likePost(post._id, post).catch(err => console.log(err)).then((val) => {
      this.http.getByID(post._id).then((val : post) => {
        console.log(val)
        this.post = val})
    }).catch(err => console.log(err))
  }

  commentPost(post : post){
    if(!this.comment) return;
    this.http.commentPost(post._id, post, this.comment).catch(err => console.log(err)).then(() => {
      this.http.getByID(post._id).then((val : post) =>  this.post = val)
    });
  }

  deletePost(id){
    this.http.delete(id).then((val) => this.viewCtrl.dismiss())
  }

  CloseModal(){
    this.viewCtrl.dismiss()
  }
}
