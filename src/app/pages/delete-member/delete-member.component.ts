import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.sass']
})
export class DeleteMemberComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DeleteMemberComponent>) { }
  
  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close(false);
  }
}
