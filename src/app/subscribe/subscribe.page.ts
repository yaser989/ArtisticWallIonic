import { Component, OnInit } from '@angular/core';
import { ArtistDto } from '../models/artistDto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArtistService } from '../services/artist/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  artist : ArtistDto = new ArtistDto();
  artistForm :FormGroup; 
  errorMessage : string;
  private currentColor: string
  constructor( private router : Router, private artistService :ArtistService) { }

  ngOnInit() {
    this.artistForm= new FormGroup({
      ArtistName : new FormControl ('',Validators.required),
      ArtistLastName : new FormControl ('',Validators.required),
      ArtistMail : new FormControl ('',Validators.required),
      ArtistPassword : new FormControl ('',Validators.required),
      ArtistDomain : new FormControl ('',Validators.required)
    });
    this.currentColor = 'dark';
  }
  createNewArtist(){
    this.artistService.createNewArtist(this.artist).subscribe(data => {
      this.artist=data
      console.log(this.artist);
      this.router.navigate(['/login']);
    
    });

  }
}
