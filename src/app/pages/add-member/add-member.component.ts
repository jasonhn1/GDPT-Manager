<<<<<<< HEAD
import { Component, OnInit,AfterViewInit, ViewChild ,ElementRef} from '@angular/core';
=======
import { Component, OnInit,AfterViewInit } from '@angular/core';
>>>>>>> 37253dda971bf14b72365b80416a622c01b7d828
import { ActivatedRoute,Router } from '@angular/router';
import {MemberService} from 'src/app/member.service';
import Member from 'src/app/model/member';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Loader } from '@googlemaps/js-api-loader';


<<<<<<< HEAD
declare const google:any;

=======
>>>>>>> 37253dda971bf14b72365b80416a622c01b7d828
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})

export class AddMemberComponent implements OnInit,AfterViewInit {

  map!: google.maps.Map;
  @ViewChild('mapElement',{static:false}) mapElement!:ElementRef;

  nameFormGroup!: FormGroup;
  addressFormGroup!: FormGroup;
  contactFormGroup!: FormGroup;
  condition = true;
  isEditable = true;

  member: Member = new Member();
  memberForm!: FormGroup;

  states: string[] = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

  startDate = new Date(2000, 0, 1);
  
  constructor(
<<<<<<< HEAD
    private elementRef: ElementRef,
    private formBuilder:FormBuilder,
    private memberService: MemberService,
=======
    private formBuilder:FormBuilder
    ,private memberService: MemberService,
>>>>>>> 37253dda971bf14b72365b80416a622c01b7d828
    private route:ActivatedRoute,
    private router: Router) { }

  
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  ngOnInit(): void {
    this.initializeForms();
  }

  ngAfterViewInit():void{
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundImage = 'linear-gradient(to bottom right, #A1FFCE, #FAFFD1)';
  }

  mapAddress(){
    let loader = new Loader({
      apiKey: 'AIzaSyAeIaJzFlzDflZ2aJVCe_V-6EQEuc2wwcI'
    })
    loader.load().then(() => {
     let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });


    });

  }
  geocodeAddress(
    geocoder: google.maps.Geocoder,
    resultsMap: google.maps.Map
  ) {
    console.log(this.addressFormGroup.value.street);
    const address = this.addressFormGroup.value.street;

    geocoder
      .geocode({ address: address })
      .then(({ results }) => {
        resultsMap.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
        });
      })
      .catch((e) =>
        alert("Geocode was not successful for the following reason: " + e)
      );
  }

hide(){
  this.condition=false;
}
  initializeForms(){

    this.nameFormGroup = this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      dob:Date,
      firstName:'',
      lastName:''
    });

    this.addressFormGroup = this.formBuilder.group({
      street:'',
      city:'',
      state:'',
      postalcode:''
      // street:['', Validators.required],
      // city:['', Validators.required],
      // state:['', Validators.required],
      // postalcode:[0, Validators.minLength(5)],
    });

    this.contactFormGroup = this.formBuilder.group({
      name:'',
      relation:'',
      phone:''
      // name:['', Validators.required],
      // relation:['', Validators.required],
      // phone:['', Validators.minLength(10)],
    });

  }

  dts(str:any){
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
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
<<<<<<< HEAD
    var member_dob = this.convertDatetoString(this.nameFormGroup.value.dob);
    this.member = {
      _id:"",
      name: this.nameFormGroup.value.firstName + " " + this.nameFormGroup.value.lastName,
      address: this.addressFormGroup.value.street + ", "+ this.addressFormGroup.value.city
      + ", " + this.addressFormGroup.value.state+ " " + this.addressFormGroup.value.postalcode,
      dob:member_dob,
      phapdanh: "",
      contact:this.contactFormGroup.value,
=======
    var member_dob = this.convertDatetoString(this.memberForm.value.dob);
    this.member = {
      _id:"",
      name: this.memberForm.value.name.firstname + " " + this.memberForm.value.name.lastname,
      address: this.memberForm.value.address.street + " "+ this.memberForm.value.address.city
      + " " + this.memberForm.value.address.state+ " " + this.memberForm.value.address.postalcode,
      dob:member_dob,
      phapdanh: this.memberForm.value.phapdanh,
      contact:this.memberForm.value.contact,
>>>>>>> 37253dda971bf14b72365b80416a622c01b7d828
      active:true
    };

    this.memberService.addMember(this.member).subscribe(
      ()=> this.router.navigate(['../'],{relativeTo: this.route}));
<<<<<<< HEAD
=======

>>>>>>> 37253dda971bf14b72365b80416a622c01b7d828
  }
}
