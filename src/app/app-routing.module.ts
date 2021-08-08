import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { AddMemberComponent } from './pages/add-member/add-member.component';
import { EditMemberComponent } from './pages/edit-member/edit-member.component';

// These are the routes in our 
const routes: Routes = [
  {path:'',component: MainViewComponent},
  {path:'add-member', component: AddMemberComponent},
  {path:'edit-member', component: EditMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
