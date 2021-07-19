import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {MemberService} from 'src/app/member.service';
import Member from 'src/app/model/member';
import { FormBuilder, FormGroup} from '@angular/forms';


interface State {
  id: Number;
  name: string;
}

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  member: Member = new Member();
  memberForm!: FormGroup;
  states: State[] = [
    {id:1,name:'AL'},
    {id:2,name:'AK'},
    {id:3,name:'AS'},
    {id:4,name:'AZ'},
    {id:5,name:'AR'},
    {id:6,name:'CA'},
    {id:7,name:'CO'},
    {id:8,name:'CT'},
    {id:9,name:'DE'},
    {id:10,name:'DC'},
    {id:11,name:'FM'},
    {id:12,name:'GA'},
    {id:13,name:'GU'},
    {id:14,name:'HI'},
    {id:15,name:'ID'},
    {id:16,name:'IL'}

  ]; 
  startDate = new Date(2000, 0, 1);
  
  constructor(private formBuilder:FormBuilder
    ,private memberService: MemberService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.memberForm = this.formBuilder.group({
      name: 'Jason',
      address: '',
      dob:'',
      phapdanh:'',
      contact: this.formBuilder.group({
        name:'',
        relation:'',
        phone:Number
      }),
      active:true
    })
  }
  onSubmit(){
    console.log(this.memberForm)
  }
}
