import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Member from './model/member';

@Injectable({
  providedIn: 'root'
})
export class EditDataService {

  private _memberDataSource!:Member;

  constructor() {
  }

  sendMember(member:Member){
    this._memberDataSource =member;
  }

  getMember(){
    return this._memberDataSource;
  }
}
