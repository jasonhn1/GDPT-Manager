import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { AddMemberComponent } from './pages/add-member/add-member.component';
import { EditMemberComponent } from './pages/edit-member/edit-member.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { SignoutComponent } from './pages/signout/signout.component';
// These are the routes in our 
const routes: Routes = [
  {path:'',component: MainViewComponent},
  {path:'add-member', component: AddMemberComponent},
<<<<<<< HEAD
  {path:'edit-member', component: EditMemberComponent},
  {path:'login', component:LoginComponent},
  {path:'signedout',component:SignoutComponent}
=======
>>>>>>> 37253dda971bf14b72365b80416a622c01b7d828
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
