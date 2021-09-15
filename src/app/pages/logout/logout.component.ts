import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<LogoutComponent>) { }
  
  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close(false);
  }

}
