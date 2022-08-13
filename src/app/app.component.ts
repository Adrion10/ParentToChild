import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Parent To Child';
  data1 = '5';
  updateData() {
    this.data = Math.floor(Math.random() * 10);
  }
}
