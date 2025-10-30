import { Routes } from '@angular/router';
import { Faculty } from './faculty/faculty';
import { Student } from './student/student';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'faculty', component: Faculty},
  { path: 'student', component: Student}
];
