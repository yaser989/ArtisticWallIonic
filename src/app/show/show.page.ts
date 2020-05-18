import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';
import { EventDto } from '../models/eventDto';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event/event.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  artist :Artist ; 
  evente : EventDto [];
  typeEvent : any;
 events : Event;
  constructor(private eventService:EventService,private router :Router,private route : ActivatedRoute) {
    this.checkUser();
   }

  ngOnInit() {
    this.findEventByShow();
  }
  filter(keyWord: string){
    if(keyWord === undefined || keyWord.length === 0){
      this.findEventByShow();
      return;
    }
    this.evente = this.evente.filter(data => 
  data.categoriesDto.toLocaleLowerCase().includes(keyWord) 
      
      );
  }
  
  
  
    checkUser(){
      if (localStorage.getItem('currentUser') === undefined || localStorage.getItem('currentUser') === null){
        this.router.navigate(['/login']);
        return;
      }
      this.artist = JSON.parse(localStorage.getItem('currentUser'));
    }
  
    findEventByShow(){
      this.eventService.getEventByShow().subscribe(data => {
        this.evente = data
      });
    }
  
    shareEvent(idEvent : number, shared: boolean){
    this.eventService.shareEvent(idEvent,shared)
    .pipe()
    .subscribe(data => {
      this.findEventByShow();
    });
    window.location.reload();
    }
 
}
