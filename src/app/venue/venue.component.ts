import { Component, Output, EventEmitter,Input, } from '@angular/core';
import { DATA } from '../data';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';

import { Venue } from './venue.model';

@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.css'
})
export class VenueComponent {
 data = DATA;

 @Input({required:true}) uniOffcanvas!:string;
 @Input() description?:string;
 @Input() id!: string;

 @Input({required:true}) venue!: Venue;
 

 @Output() offcanvas = new EventEmitter();

 shouldActivateOffcanvas: boolean = false;
  isLiked: boolean = false;

  get imagePath(){
    return 'assets/users/' + this.venue.image;
  }
  
  
  onSelectVenue()
  {
    if(this.shouldActivateOffcanvas){
      const offcanvasElement = document.getElementById(this.uniOffcanvas);
      if (offcanvasElement) {
        const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
        bsOffcanvas.show();
      }
    }
      this.shouldActivateOffcanvas = true;
      console.log(this.shouldActivateOffcanvas);
      this.offcanvas.emit(this.id);
  }
  likedStorage: string[] = [];

  addToLiked(event: Event){
    event.stopPropagation();
    let target = event.currentTarget as HTMLElement;
    if (target && !this.isLiked) {
      this.likedStorage.push(this.id);
      
      target.classList.add('liked-heart');
      target.classList.remove('fa-regular');
      target.classList.add("fa-solid");
      this.isLiked = true;
      
    }else {
      target.classList.remove('liked-heart');
      target.classList.remove('fa-solid');
      target.classList.add('fa-regular');
      this.isLiked = false;
      this.likedStorage = this.likedStorage.filter(item => item !== this.id);
    }


  }



}
