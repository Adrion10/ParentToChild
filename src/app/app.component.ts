import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Parent To Child';
  data = 5;
  updateData() {
    this.data = Math.random();
  }
}
