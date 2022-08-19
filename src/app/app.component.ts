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
    this.data = Math.floor(Math.random() * 10);
  }
  title1 = 'user-details';
  userDetails = [
    { name: 'Lace', email: 'lace@gmail.com' },
    { name: 'Lace', email: 'lace@gmail.com' },
    { name: 'Nole', email: 'Noel@gmail.com' },
    { name: 'Marisola', email: 'Marisola@gmail.com' },
    { name: 'Rovena', email: 'Rovena@gmail.com' },
  ];
}
