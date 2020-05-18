import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ArtistService } from './services/artist/artist.service';
import { Router } from '@angular/router';
import { EventService } from './services/event/event.service';
import { ArtistDto } from './models/artistDto';
import { Artist } from './models/artist';
import { EventDto } from './models/eventDto';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  artist : ArtistDto;
  artiste : Artist;
  event : EventDto;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,private router :Router,
    private eventService : EventService,
    private artistService :ArtistService
  ) {
    this.initializeApp();
    this.checkUser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
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
