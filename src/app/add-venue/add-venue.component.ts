import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { DATA } from '../data';
import { VenueComponent } from '../venue/venue.component';
import { NgIf } from '@angular/common';
import { type NewVenueData } from '../venue/venue.model';

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
export class AddVenueComponent{

  @Output() add = new EventEmitter<NewVenueData>();

  backgroundImage: string | null = null;
  enteredId = '';
  enteredName = '';
  enteredStreet= '';
  enteredCity= '';
  enteredPrice= '';
  enteredImage: string = '';
  enteredDescription = '';
  enteredInfrastructure = '';
  enteredSquare_Footage = '';
  enteredNo_people = '';
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.backgroundImage = e.target?.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
  
  onSubmit(){
    const newVenue: NewVenueData = {
      id: this.enteredId,
      name: this.enteredName,
      street: this.enteredStreet,
      city: this.enteredCity,
      price: this.enteredPrice,
      image: this.enteredImage,
      description: this.enteredDescription,
      infrastructure: this.enteredInfrastructure,
      square_footage: this.enteredSquare_Footage,
      no_people: this.enteredNo_people,
    };
    this.add.emit(newVenue);
  }
  }
  
  // data: any[] = [];

  // venues = DATA;

  // constructor(private commonService: CommonService) { }

  // ngOnInit() { }
  // addVenuesToDatabase() {
  //   this.venues.forEach(venue => {
  //     this.commonService.addVenue(venue).subscribe((response: any) => {
  //       console.log('Venue added:', response);
  //     });
  //   });
  // }

