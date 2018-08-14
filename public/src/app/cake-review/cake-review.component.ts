import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake-review',
  templateUrl: './cake-review.component.html',
  styleUrls: ['./cake-review.component.css']
})
export class CakeReviewComponent implements OnInit {
  @Input() cake={}
  @Input() ratings=[]
  @Input() average=-1
  constructor() { }

}
