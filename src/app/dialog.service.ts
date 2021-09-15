import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMemberComponent } from './pages/delete-member/delete-member.component';
import { LogoutComponent } from './pages/logout/logout.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  openDeleteDialog(){
    return this.dialog.open(DeleteMemberComponent,{
      width:'390px',
      disableClose:true
    });
  }

  openSignOutDialog(){
    return this.dialog.open(LogoutComponent,{
      width:'390px',
      disableClose:true
    });
  }
}
