import { Component, Output, EventEmitter,Input, } from '@angular/core';
import { DATA } from '../data';
import { OffcanvasComponent } from '../offcanvas/offcanvas.component';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';

interface User {
  name: string;
  image: string;
  street: string;
  price: string;
  infrastructure: string;
  square_footage: string;
}

@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [OffcanvasComponent,CommonModule],
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.css'
})
export class VenueComponent {
 data = DATA;

 @Input({required:true}) uniOffcanvas!:string;
 @Input() description?:string;
 @Input() id!: string;

 @Input({required:true}) venue!: User;
 

 @Output() offcanvas = new EventEmitter();

 shouldActivateOffcanvas: boolean = false;
  isLiked: boolean = false;

  get imagePath(){
    return 'assets/users/' + this.venue.image;
  }
  
  onSelectVenue()
  {
      this.shouldActivateOffcanvas = true;
      console.log(this.shouldActivateOffcanvas);
      this.offcanvas.emit(this.id);
  }
  likedStorage: string[] = [];

  addToLiked(event: Event){

    const target = event.currentTarget as HTMLElement;
    if (target && !this.isLiked) {
      this.likedStorage.push(this.id);
      target.classList.add('liked-heart');
      target.classList.remove('fa-regular');
      target.classList.add("fa-solid");
      this.isLiked = true;
      console.log("Dodano do ulubionych! " + this.venue.name );
      console.log("Polubione elementy: " + this.likedStorage);
    }else {
      target.classList.remove('liked-heart');
      target.classList.remove('fa-solid');
      target.classList.add('fa-regular');
      this.isLiked = false;
      console.log(this.venue.name + " Usunięto z ulubionych!");
      this.likedStorage = this.likedStorage.filter(item => item !== this.id);
      console.log("Polubione elementy: " + this.likedStorage);
    }

  }



}
