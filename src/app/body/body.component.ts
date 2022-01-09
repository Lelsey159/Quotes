import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  quotes:Qoute[] = [
    new Qoute(1, ' Albert Einstein." ', 'Lesley', '“We cannot solve problems with the kind of thinking we employed when we came up with them.” ',new Date(2021,8,20)),
    
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  completeGoal(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let goalLength = this.quotes.length;
    quote.id = goalLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
