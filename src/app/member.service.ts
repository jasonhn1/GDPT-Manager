import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import Member from "src/app/model/member";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private webService:WebService) { }
  
  getMembers(){
    return this.webService.get('members');
  }

  addMember(memberJson:any){
    return this.webService.post('members',memberJson);
  }

  deleteMember(memberId:string){
    return this.webService.delete(`members/${memberId}`);
  }

  // editMember(memberId:string){
  //   return this.webService.patch(`members/${memberId}`);
  // }

  // setCompleted(listId:string,task:Task){
  //   return this.webService.patch(`lists/${listId}/tasks/${task._id}`,{completed:!task.completed});
  // }

}
