import { Component, OnInit } from '@angular/core';
import { ArtistDto } from '../models/artistDto';
import { ArtistService } from '../services/artist/artist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  artist : ArtistDto = new ArtistDto();
  id : number;
  public spinner : boolean;
  public currentUploadFile : any;
 public currentTime : number;
 public editPhoto :boolean;
 currentFileUpload:File;
 selectedFiles : FileList;
 isShow = false;
 
 
 progress: { percentage: number } = { percentage: 0 }
  constructor(private route : ActivatedRoute, private router: Router,private artistService:ArtistService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.artistService.findArtistById(this.id)
    .subscribe(data => {
      this.artist = data
      console.log(this.artist);
    });

  }
  updateArtist(){
    this.artistService.updateArtist(this.artist,this.id)
    .subscribe(data => {
      this.artist = data;
    }); 
    this.router.navigate(['/home']);
  }


  onselected(event) {
    const file = event.target.files.item(0)
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  uploadPhotoArtist(id:number) {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0)
    this.artistService.uploadProductPhoto(this.currentFileUpload, id)
    .subscribe(event => {
      if(event.type === HttpEventType.UploadProgress){
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        alert('File loaded successfully');
        console.log('check if ' + event.url);
        window.location.reload();
      }
    }, err => {
        alert('Image failled to load');
    });
    this.selectedFiles = undefined;
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
