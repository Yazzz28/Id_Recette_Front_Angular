import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '@components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ NavbarComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      window.location.href = '/login';
    }
  }
}
