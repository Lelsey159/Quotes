import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Qoute } from '../qoute';
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  @Input() goal: Qoute;


  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  @Output() isDone = new EventEmitter<boolean>();
    like = 0;
    dislike = 0;

    upVote(){
      if (this.dislike <= 0 ) {
        this.like = this.like + 1;
      } else {
        this.like = this.like + 1;
      this.dislike = this.dislike - 1
      }
      
    }

    
    downVote(){
      if (this.like <= 0 ) {
        this.dislike = this.dislike + 1;  
      }
      else {
        this.like = this.like - 1;
      this.dislike = this.dislike + 1;

      }
      
    }


  constructor() { }

  ngOnInit(): void {
  }

}
