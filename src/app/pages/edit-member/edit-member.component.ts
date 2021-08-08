import { Component, OnInit,AfterViewInit, Input, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {MemberService} from 'src/app/member.service';
import Member from 'src/app/model/member';
import { FormBuilder, FormGroup} from '@angular/forms';
import { EditDataService } from 'src/app/edit-data.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  member: Member = new Member();
  memberForm!: FormGroup;

  first_name!:any;
  last_name!:any;
  street!:string;
  city!:string;
  state!:string;
  postalcode!:Number;


  states: string[] = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

  startDate = new Date(2000, 0, 1);
  
  constructor( private _editMemberService: EditDataService,
    private formBuilder:FormBuilder
    ,private memberService: MemberService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.member = this._editMemberService.getMember();
    this.getAddress();
    this.getName();
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

  getName(){
    var first, last = this.member.name.split(" ");
    this.first_name = first;
    this.last_name = last;
  }

  getAddress(){
    console.log(this.member.address);
    //8830 Sunset BlvdWest Hollywood, CA 90069
    var data = this.member.address.split(",");
    var temp = this.member.address.split(" ");
    this.street = data[0];
    this.city = temp[3];
    this.state = temp[4];
    this.postalcode =parseInt(temp[5]);
  }

  initializeForm(){

    this.memberForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstname:this.first_name,
        lastname:this.last_name,
      }),
      address:this.formBuilder.group({
        street:this.street,
        city:this.city,
        state:this.state,
        postalcode:this.postalcode,
      }),
      dob:this.member.dob,
      phapdanh:this.member.phapdanh,
      contact: this.formBuilder.group({
        name:this.member.contact.name,
        relation:this.member.contact.relation,
        phone:this.member.contact.phone
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
