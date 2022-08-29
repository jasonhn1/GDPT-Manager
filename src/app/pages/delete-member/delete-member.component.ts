import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.sass']
})
export class DeleteMemberComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DeleteMemberComponent>) { }
<<<<<<< HEAD
  
=======

>>>>>>> 37253dda971bf14b72365b80416a622c01b7d828
  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close(false);
  }
}
