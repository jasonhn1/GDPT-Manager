import { ViewChild,Component, OnInit,ElementRef,AfterViewInit } from '@angular/core';
import Member from 'src/app/model/member';
import {MemberService} from 'src/app/member.service';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogService } from 'src/app/dialog.service';
import { EditDataService } from 'src/app/edit-data.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit,AfterViewInit {
  // Members array
  public members: Member[] =[];
  displayedColumns: string[] = ['name', 'address', 'dob', 'phapdanh', 'contact', 'active','edit','delete'];
  dataSource = new MatTableDataSource();
  memberId:string="";
  term!:any;

  displayAdminBtn = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private elementRef: ElementRef,
    private _editMemberService :EditDataService,
    public dialog: MatDialog,
    private memberService: MemberService,
    private route:ActivatedRoute,
    private dialogService:DialogService,
    private router: Router) {
      this.route.params.subscribe((params:Params)=> console.log(params._id));
    }


  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.background = '#a2d1c5';
    this.memberService.getMembers().subscribe( (data) => {this.dataSource.data= data});
  }
  // 767
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onResize(event:any){
    if (event.target.innerWidth <= 767){
       this.displayAdminBtn = true;
    }
      
  }

  addMemberClick(){
    this.router.navigate(['./add-member'],{ relativeTo: this.route });
  }
  editMemberClick(member:Member){
    this._editMemberService.sendMember(member);
    this.router.navigate(['./edit-member'],{ relativeTo: this.route });
  }

  doFilter(event: any){
    this.dataSource.filter = (<HTMLInputElement>event.target).value.trim().toLocaleLowerCase();
  }


  deleteMember(member:Member){
    this.dialogService.openDeleteDialog()
    .afterClosed().subscribe(res =>{
      if (res){
          this.memberService.deleteMember(member._id)
          .subscribe(() => 
          this.memberService.getMembers().subscribe( (data) => {this.dataSource.data= data})); 
      }
    });
  }
}
