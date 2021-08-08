class Contact{
    name:string='';
    relation:string='';
    phone:Number =0;
}

export default class Member{
    _id:string='';
    name:string = '';
    address:string= '';
    dob:string='';
    phapdanh:string='';
    contact!:Contact;
    active:boolean=true;
}