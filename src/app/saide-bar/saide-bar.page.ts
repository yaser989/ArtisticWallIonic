import { Component, OnInit } from '@angular/core';
import { ArtistDto } from '../models/artistDto';
import { Artist } from '../models/artist';
import { EventDto } from '../models/eventDto';
import { Router } from '@angular/router';
import { EventService } from '../services/event/event.service';
import { ArtistService } from '../services/artist/artist.service';

@Component({
  selector: 'app-saide-bar',
  templateUrl: './saide-bar.page.html',
  styleUrls: ['./saide-bar.page.scss'],
})
export class SaideBarPage implements OnInit {
  artist : ArtistDto;
  artiste : Artist;
  event : EventDto;
  private currentColor: string
  constructor(private router :Router,
    private eventService : EventService,
    private artistService :ArtistService) { 
      
      this.checkUser();
    }

  ngOnInit() {
  }
  checkUser(){
    if (localStorage.getItem('currentUser') === undefined || localStorage.getItem('currentUser') === null){
      this.router.navigate(['/login']);
      return;
    }
    this.artist = JSON.parse(localStorage.getItem('currentUser'));
  }

  addNewEvent(){
    let idDto = localStorage.getItem('currentUser');
    this.eventService.findAllArtistEvent(this.artist.id)
    .subscribe(data => this.artist.id, err => console.log(err));
    this.router.navigate(['/create-new-event']);
  }
  goToHome(){
    this.router.navigate(['/home']);
  }
  profile(id: number){
    this.router.navigate(['/profile',id]);
  }
   logout(){
   this.artistService.logout()   
  localStorage.clear();
  window.location.reload();
  
   }
   
}
