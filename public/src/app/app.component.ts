import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  newCake:any
  response:any
  cakes=[]
  selected:boolean
  showCake:any
  cakeRating:number
  cakeComment:string
  ratings=[]
  avgRating=0
  constructor(private _httpService: HttpService){
    this.newCake={baker:'', imagePath:''}
    this.selected=false
    this.showCake={baker:'', imagePath:''}
    this.cakeRating=5
    this.cakeComment=''
  }
  ngOnInit(){
    this.getAllCakes()
  }
  createCake(){
    console.log("Creating this cake")
    var cakeObservable=this._httpService.createCake(this.newCake)
    cakeObservable.subscribe(data=>{
      this.response=data
      this.getAllCakes()
      this.newCake={baker:'', imagePath:''}
    })
    
  }
  getAllCakes(){
    console.log("Fetching all cakes")
    var cakeObservable = this._httpService.fetchAllCakes()
    cakeObservable.subscribe(data=>{
      this.response=data
      this.cakes=data['cakes']
    })
  }
  cakeClicked(_id:String){
    console.log('Clicked on a cake')
    this.selected=true
    var cakeObservable=this._httpService.getOneCake(_id)
    cakeObservable.subscribe(data=>{
      this.response=data
      if(data['success']==1){
        this.showCake=data['cake']
        this.ratings=this.showCake.ratings
        var sum=0
        for(var i=0; i<this.ratings.length; i++){
          sum+=this.ratings[i].rating
        }
        this.avgRating=sum/this.ratings.length
      }
    })
  }
  createRating(_id){
    var observable=this._httpService.createRating(_id, this.cakeRating, this.cakeComment)
    observable.subscribe(data=>{
      this.response=data
      this.cakeComment=''
      this.cakeRating=5
    })
    console.log("Creating rating")
  }
}
