import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material/chips';

export interface keyword {
  name: string;
}

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

@Output() notify:EventEmitter<Object>=new EventEmitter<Object>();;
  

  title:string;
  description:string;
 
  constructor() {this.title="";this.description=""; }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  keywords: keyword[] = [
    {name: 'Angular'},
    {name: 'Component'},
    {name: 'Todo'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.keywords.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  //All Data from create-todo-form
	data(description:HTMLInputElement,title:HTMLInputElement){
		this.description=description.value;
			this.title=title.value;
			console.log(this.title+" "+this.description+" "+this.keywords);
	//reset input value
	title.value="";
	description.value="";
	this.notify.emit({"title":this.title,"description":this.description,"keywords":this.keywords});
			
	}
  remove(keyword: keyword): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  ngOnInit(): void {
  	console.log()
  }

}
