import { Component, Output, EventEmitter,Input, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Venue } from '../venue/venue.model';
import { DATA } from '../data';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  
 
}
