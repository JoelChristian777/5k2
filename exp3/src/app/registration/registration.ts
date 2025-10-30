import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})

export class Registration {
  name = '';
  email = '';
  password = '';

  onSubmit() {
    alert(`Registration Complete !\nName : ${this.name} Email: ${this.email} `);
  }
}
