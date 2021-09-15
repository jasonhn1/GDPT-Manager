import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router,ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router,
    private dialogService:DialogService,
    private route:ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  signOut(){
    this.dialogService.openSignOutDialog()
    .afterClosed().subscribe(res =>{
      if (res){
        this.router.navigate(['./signedout'],{ relativeTo: this.route });
      }
    });
  } 
  

}
