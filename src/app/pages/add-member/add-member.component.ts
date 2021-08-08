import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {MemberService} from 'src/app/member.service';
import Member from 'src/app/model/member';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  member: Member = new Member();
  memberForm!: FormGroup;

  states: string[] = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

  startDate = new Date(2000, 0, 1);
  
  constructor(
    private formBuilder:FormBuilder
    ,private memberService: MemberService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  convertDatetoString(date:any){
    var month =date.getMonth();
    var day = date.getDate();
    if (month <= 9){
      month = `0${month}`;
    }

    if (day <= 9){
      day= `0${day}`;
    }

    return `${date.getFullYear()}-${month}-${day}`
  }

  initializeForm(){
    this.memberForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstname:'',
        lastname:'',
      }),
      address:this.formBuilder.group({
        street:'',
        city:'',
        state:'',
        postalcode:'',
      }),
      dob:Date,
      phapdanh:'',
      contact: this.formBuilder.group({
        name:'',
        relation:'',
        phone:''
      }),
      active:true
    })
  }
  onSubmit(){
    var member_dob = this.convertDatetoString(this.memberForm.value.dob);
    this.member = {
      _id:"",
      name: this.memberForm.value.name.firstname + " " + this.memberForm.value.name.lastname,
      address: this.memberForm.value.address.street + " "+ this.memberForm.value.address.city
      + " " + this.memberForm.value.address.state+ " " + this.memberForm.value.address.postalcode,
      dob:member_dob,
      phapdanh: this.memberForm.value.phapdanh,
      contact:this.memberForm.value.contact,
      active:true
    };

    this.memberService.addMember(this.member).subscribe(
      ()=> this.router.navigate(['../'],{relativeTo: this.route}));

  }
}
