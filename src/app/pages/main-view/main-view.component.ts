import { Component, OnInit } from '@angular/core';
import Member from 'src/app/model/member';
import {MemberService} from 'src/app/member.service';
import { ActivatedRoute,Router,Params } from '@angular/router';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  // Members array
  members: Member[] =[];
  displayedColumns: string[] = ['name', 'address', 'dob', 'phapdanh', 'contact', 'active','edit','delete'];
  constructor(private memberService: MemberService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.memberService.getMembers()
    .subscribe( data => this.members = data);
  }
}

