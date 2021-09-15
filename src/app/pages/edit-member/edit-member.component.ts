import { Component, OnInit,ElementRef,AfterViewInit } from '@angular/core';
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
export class EditMemberComponent implements OnInit,AfterViewInit {

  member: Member = new Member();


  first_name!:any;
  last_name!:any;
  street!:string;
  city!:string;
  state!:string;
  postalcode!:Number;
  editMemberForm!: FormGroup;


  states: string[] = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

  startDate = new Date(2000, 0, 1);
  
  constructor(private elementRef: ElementRef,
    private _editMemberService: EditDataService,
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

  ngAfterViewInit():void{
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundImage = 'linear-gradient(to bottom right, #A1FFCE, #FAFFD1)';
  }

  getName(){
    var data = this.member.name.split(" ");

    this.first_name = data[0];
    this.last_name = data[1];
  }

  convertdatetoString(date:any){

    if(typeof date == "string") {
      return date
    }

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

  getAddress(){

    //8830 Sunset BlvdWest Hollywood, CA 90069
    var data = this.member.address.split(",");
    var temp = this.member.address.split(" ");

    this.street = data[0];
    this.city = data[1].trim();
    this.state = temp[temp.length - 2];
    this.postalcode = parseInt(temp[temp.length - 1]);
  }

  initializeForm(){
    this.editMemberForm = this.formBuilder.group({
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
      active:this.member.active
    })
  }

  
  onSubmit(){
    
    var member_dob = this.convertdatetoString(this.editMemberForm.value.dob);
    this.member = {
      _id:this.member._id,
      name: this.editMemberForm.value.name.firstname + " " + this.editMemberForm.value.name.lastname,
      address: this.editMemberForm.value.address.street + ", "+ this.editMemberForm.value.address.city
      + ", " + this.editMemberForm.value.address.state+ " " + this.editMemberForm.value.address.postalcode,
      dob:member_dob,
      phapdanh: this.editMemberForm.value.phapdanh,
      contact:this.editMemberForm.value.contact,
      active:this.editMemberForm.value.active
    };

    this.memberService.editMember(this.member).subscribe(
      ()=> this.router.navigate(['../'],{relativeTo: this.route}));
  }

}
