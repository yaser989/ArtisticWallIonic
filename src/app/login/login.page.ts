import { Component, OnInit } from '@angular/core';
import {Artist} from 'src/app/models/artist';
import {ArtistService} from 'src/app/services/artist/artist.service';
import{FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMessage : string;
  public loginForm: FormGroup;
  artist : Artist;
  private currentColor: string

  constructor(private artistService : ArtistService,private formBuilder: FormBuilder,private router :Router) {
    this.loginForm=new FormGroup({
      mail : new FormControl ('',Validators.required),
      password :new FormControl ('',Validators.required)
    });
   }

  ngOnInit() {
    this.currentColor = 'dark';
  }
  loginUser() {
    this.errorMessage = "";
    if (this.loginForm.invalid) {
      this.errorMessage = "EMail and / or password is incorrect";
      return;
    }
    this.artistService.login(this.userName.value, this.password.value)
      .pipe()
      .subscribe(data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        console.log(data);
        
        this.router.navigate(['/home']);
      }, error => {
        if(error.status === 404) {
          this.errorMessage = "No user was found with the following Email/Password";
        }
        if(error.status === 400) {
          this.errorMessage = "EMail and / or password is incorrect";
        }
      });
  }

  get userName() {
    return this.loginForm.get('mail');
  }

  get password() {
    return this.loginForm.get('password');
  }
     
}
