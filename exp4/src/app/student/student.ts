import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  name = '';
  email = '';
  password = '';

  onSubmit() {
    alert('Student Registered Successfully!');
  }
}
