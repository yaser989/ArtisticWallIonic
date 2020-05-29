import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';
import { EventDto } from '../models/eventDto';
import { Router } from '@angular/router';
import { EventService } from '../services/event/event.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.page.html',
  styleUrls: ['./concert.page.scss'],
})
export class ConcertPage implements OnInit {
  artist :Artist ; 
  evente : EventDto [];
  events : Event;
  constructor(private eventService:EventService,private router :Router) { 
    this.checkUser();
  }

  ngOnInit() {
    this.findEventByCocert();
  }
  filter(keyWord: string){
    if(keyWord === undefined || keyWord.length === 0){
      this.findEventByCocert();
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
  
    findEventByCocert(){
      this.eventService.getEventByConcert().subscribe(data => {
        this.evente = data
      });
    }
  
    shareEvent(idEvent : number, shared: boolean){
    this.eventService.shareEvent(idEvent,shared)
    .pipe()
    .subscribe(data => {
      this.findEventByCocert();
    });
    window.location.reload();
  }

  public  check : boolean ;
  nameButton : String = "see more..";
   myClick  ()  { 
     this.check =! this.check;
     if (this.check){
       this.nameButton = "show less";
     }
 else{
   this.nameButton = "see more..";
 }
 
   }
}
