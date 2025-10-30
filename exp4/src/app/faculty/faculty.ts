import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faculty',
  imports: [FormsModule],
  templateUrl: './faculty.html',
  styleUrl: './faculty.css',
})
export class Faculty {
  name = '';
  email = '';
  password = '';

  onSubmit() {
    alert('Faculty Registered Successfully!');
  }
}
