import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { DATA } from '../data';
import { VenueComponent } from '../venue/venue.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgIf } from '@angular/common'
import { AddVenueComponent } from "../add-venue/add-venue.component";
import { type NewVenueData } from '../venue/venue.model';
import { FindVenueComponent } from "../find-venue/find-venue.component";
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from "../registration/registration.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent, 
    FindVenueComponent, 
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule,
    VenueComponent,
    NavbarComponent,
    NgIf,
    AddVenueComponent,
    FindVenueComponent,
    RouterModule,
    RegistrationComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input({required: true}) name!: string;
  checkVenue = false;

  addVenue(){
    this.checkVenue = true; 
  }

  venues = DATA;

  
  onAddVenue(venueData:NewVenueData){
    
    this.venues.push({
      id: new Date().getTime().toString(),
      name: venueData.name,
      street: venueData.street,
      city: venueData.city,
      price: venueData.price,
      image: venueData.image,
      description: venueData.description,
      infrastructure: venueData.infrastructure,
      square_footage: venueData.square_footage,
      no_people:venueData.no_people,
    });
    this.checkVenue = false;
  }
  
}
