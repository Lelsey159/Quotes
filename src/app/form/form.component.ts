import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Qoute } from '../qoute';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newGoal = new Qoute(0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Qoute>();
  
  submitQuote(){
    this.addQuote.emit(this.newGoal);
      }
    

  constructor() { }

  ngOnInit(): void {
  }

}
