import { Component, OnInit ,Input} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ListItemComponent} from '../list-item/list-item.component';
// import {DeleteOutlineIcon} from '@material-ui/icons/DeleteOutline';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() data:Object;
prevData:Object;
    listItem:Object[];
    panelOpenState = false;

    typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() {
  	this.prevData=undefined;
this.listItem=[];
   }
   
   delthis(obj):void{
   	console.log(obj);
   	this.listItem=this.listItem.filter((o)=>o!==obj);
   }
  dataFromParent():Object{
  	return this.data;
  }
  ngOnInit(): void {
  	console.log(this.data);
  }
  getData():Object[]{
  	return this.listItem;
  }
  retrieveData():boolean {
  	if(this.data===undefined){
  		return false;
  	}
  	if(this.prevData===undefined)
  	{
  		this.prevData=this.data;
  		this.listItem.push(this.data);
		console.log(this.listItem);
	  	return true;//this.listItem.length>0;
   	}
   	if(this.prevData!==this.data)
   	{
   			this.listItem.push(this.data);
  			this.prevData=this.data;
   			console.log(this.listItem);
   	}
  	return this.listItem.length>0;
  }
}
