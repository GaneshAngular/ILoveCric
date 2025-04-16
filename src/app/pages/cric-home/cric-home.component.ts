import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cric-home',
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './cric-home.component.html',
  styleUrl: './cric-home.component.css'
})
export class CricHomeComponent {

}
