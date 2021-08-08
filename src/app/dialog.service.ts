import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMemberComponent } from './pages/delete-member/delete-member.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialog(){
    return this.dialog.open(DeleteMemberComponent,{
      width:'390px',
      disableClose:true
    });
  }
}
