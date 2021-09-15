import { Component, OnInit,AfterViewInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit,AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url(./assets/images/ocean.jpg)';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = 'cover';
  }

}
