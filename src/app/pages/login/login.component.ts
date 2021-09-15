import { Component, OnInit,ElementRef, ViewEncapsulation } from '@angular/core';
import {AuthService} from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  email!:any;
  password!:any;
  muted =true;

  constructor(private elementRef: ElementRef,
    private authService:AuthService) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
    .body.style.background = '#303e44';
  }
  
  onSubmit(email:string,password:string){
    this.authService.signIn(email,password);
  }
}
