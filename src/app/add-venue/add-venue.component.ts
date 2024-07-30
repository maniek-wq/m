import { Component,Input, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { DATA } from '../data';
import { VenueComponent } from '../venue/venue.component';
import { NgIf } from '@angular/common'



@Component({
  selector: 'app-add-venue',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    VenueComponent,
    NgIf,
    AddVenueComponent],
  templateUrl: './add-venue.component.html',
  styleUrl: './add-venue.component.css'
})
export class AddVenueComponent implements OnInit{

  // @Input({required:true}) venue!: User;
  // @Input() description?:string;
  selectedImage: File | null = null;
  

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
