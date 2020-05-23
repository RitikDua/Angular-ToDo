import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  data: Object;
  dataFromChild(data: any) {
    this.data = data;
    console.log(data);
  }
  dataToChild() {
    // console.log(data);
    return this.data;
  }
}
