import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { DATA } from '../data';
import { VenueComponent } from '../venue/venue.component';
@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [FormsModule,CommonModule,VenueComponent],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.css'
})
export class OffcanvasComponent {

@Input({required:true}) id!: string;
  users = DATA;

}
