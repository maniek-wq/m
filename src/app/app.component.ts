import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { DATA } from './data';
import { VenueComponent } from './venue/venue.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    VenueComponent,
    NavbarComponent,
    OffcanvasComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users = DATA;
  onSelectVenue(id: string){
    console.log("Selected Venue's id: " + id );
  }
  
}