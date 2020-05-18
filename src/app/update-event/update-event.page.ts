import { Component, OnInit } from '@angular/core';
import { EventDto } from '../models/eventDto';
import { Event } from '../models/event';
import { EventService } from '../services/event/event.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.page.html',
  styleUrls: ['./update-event.page.scss'],
})
export class UpdateEventPage implements OnInit {
  event : Event = new Event ();
  evente : EventDto  = new EventDto();
  idEvent:number;
  constructor(private route : ActivatedRoute, private router: Router,private eventService:EventService) { }

  ngOnInit() {
    this.idEvent = this.route.snapshot.params.idEvent;
    this.eventService.findEventByID(this.idEvent)
    .subscribe(data => {
      this.evente = data
      console.log(this.evente);
    });
    
  }
  
  updateEvent(){
    this.eventService.updateEvent(this.evente,this.idEvent)
    .subscribe(data => {
      this.evente = data;
    }); 
    this.router.navigate(['/home']);
  }
}
