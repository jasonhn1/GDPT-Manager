import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMemberComponent } from './pages/delete-member/delete-member.component';
<<<<<<< HEAD
import { LogoutComponent } from './pages/logout/logout.component';
=======

>>>>>>> 37253dda971bf14b72365b80416a622c01b7d828
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

<<<<<<< HEAD
  openDeleteDialog(){
=======
  openConfirmDialog(){
>>>>>>> 37253dda971bf14b72365b80416a622c01b7d828
    return this.dialog.open(DeleteMemberComponent,{
      width:'390px',
      disableClose:true
    });
  }
<<<<<<< HEAD

  openSignOutDialog(){
    return this.dialog.open(LogoutComponent,{
      width:'390px',
      disableClose:true
    });
  }
=======
>>>>>>> 37253dda971bf14b72365b80416a622c01b7d828
}
