import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { DATA } from './data';
import { VenueComponent } from './venue/venue.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common'
import { AddVenueComponent } from "./add-venue/add-venue.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    VenueComponent,
    NavbarComponent,
    OffcanvasComponent,
    HttpClientModule,
    NgIf,
    AddVenueComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users = DATA;
  onSelectVenue(id: string){
    console.log("Selected Venue's id: " + id );
  }
  data: any[] = [];

  venues = DATA;
  constructor(private commonService: CommonService) { }

  ngOnInit() { }

  addVenuesToDatabase() {
    this.venues.forEach(venue => {
      this.commonService.addVenue(venue).subscribe((response: any) => {
        console.log('Venue added:', response);
      });
    });
  }
}