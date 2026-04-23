import { Component } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { filter } from 'rxjs';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  showNavbar: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
