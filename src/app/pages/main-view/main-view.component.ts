import { ViewChild,Component, OnInit } from '@angular/core';
import Member from 'src/app/model/member';
import {MemberService} from 'src/app/member.service';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  // Members array
  public members: Member[] =[];
  displayedColumns: string[] = ['name', 'address', 'dob', 'phapdanh', 'contact', 'active','edit','delete'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private memberService: MemberService,
    private route:ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.memberService.getMembers().subscribe( (data) => {this.dataSource.data= data});
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addMemberClick(){
    this.router.navigate(['./add-member'],{ relativeTo: this.route });
  }
  
  editMemberClick(){
    this.router.navigate(['./edit-member'],{ relativeTo: this.route });
  }
  deleteMemberClick(){
    this.router.navigate(['./delete-member'],{ relativeTo: this.route });

  }
}

