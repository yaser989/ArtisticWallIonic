import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';
import { EventDto } from '../models/eventDto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../services/event/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-event',
  templateUrl: './create-new-event.page.html',
  styleUrls: ['./create-new-event.page.scss'],
})
export class CreateNewEventPage implements OnInit {
  artist : Artist;
  event : EventDto = new EventDto ();
  eventForm : FormGroup;
  constructor(private router :Router,private eventService : EventService) {
    this.checkUser();
  }

  ngOnInit() {
    this.eventForm = new FormGroup({
      typeEventDto : new FormControl ('',Validators.required),
      descriptionDto : new FormControl ('',Validators.required),
      categoriesDto :new FormControl ('',Validators.required),
      streetDto : new FormControl ('',Validators.required),
      zipCodeDto : new FormControl ('',Validators.required),
      commonDto :new FormControl ('',Validators.required),
      phoneDto : new FormControl ('',Validators.required),
      dateDto : new FormControl ('',Validators.required)
    });
  }
  checkUser(){
    if (localStorage.getItem('currentUser') === undefined || localStorage.getItem('currentUser') === null){
      this.router.navigate(['/login']);
      return;
    }
    this.artist = JSON.parse(localStorage.getItem('currentUser'));
  }

  createEvent(){
    this.eventService.createNewEvent(this.event,this.artist.id).subscribe (data => {
      this.event = data
      console.log(this.event)
      console.log(this.artist.id)
    });
    this.router.navigate(['/home']);
    window.location.reload();
  }
}
