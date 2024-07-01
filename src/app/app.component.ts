import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppNavbar} from './Navbar/app.navbar'
import { FooterComponent } from './Footer/footer.component';
import { MiddleComponent } from './Middle/middle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppNavbar,FooterComponent,MiddleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First-Angular-App';
}
