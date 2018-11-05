import { post } from './../../assets/interface';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
  }

  //método retorna todos os posts
  get(){
    return this.http.get(`http://localhost:3000/posts`)
    //.map(res => res.json());
  }

  //método retorna post escolhido
  getByID(id){
    return this.http.get(`http://localhost:3000/posts/${id}`).toPromise()
  }

  //método cria post e salva na base de dados
  post(post:post){
    // let headers = new Headers();
    // headers.append('Access-Control-Allow-Method', 'PUT, POST, PATCH, DELETE, GET')
    // headers.append('Content-Type', 'application/json');
    
    this.http.post(`http://localhost:3000/posts`, {...post})
    .subscribe(data => console.log(data), err => console.log(err))
  }

  //método deleta post escolhido
  delete(id){
    return this.http.delete(`http://localhost:3000/posts/${id}`).toPromise();
  }

  //método incrementa atributo likes do post
  likePost(id, post :post){
    post.likes = post.likes +1 ;
    return this.http.post(`http://localhost:3000/posts/${id}/likes`, {...post}).toPromise()
  }

  //método adiciona comentário ao vetor de comentários de post escolhido
  commentPost(id, post: post, comment) {
    if(!post.comments) post.comments = [];
    post.comments.push(comment);
    return this.http.post(`http://localhost:3000/posts/${id}/comments`, {
      ...post
    }).toPromise()
  }

}
