import { Input,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() data:Object;
  constructor() { }

  ngOnInit(): void {
  	console.log(this.data);
  }
  retrieveData(){
  
  	console.log(this.data);
  }
}
