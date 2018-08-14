import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  createCake(newCake){
    return this._http.post('/cakes', newCake)
  }
  fetchAllCakes(){
    return this._http.get('/cakes')
  }
  getOneCake(_id){
    return this._http.get(`/cakes/${_id}`)
  }
  createRating(_id, rating, comment){
    return this._http.post('/rating', {cakeID:_id, rating:rating, comment:comment})
  }
}
