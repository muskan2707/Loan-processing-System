import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ServiceCallsService } from 'src/app/services/service-calls.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  data : any;
  constructor(private service:ServiceCallsService,private router:Router) { }

  ngOnInit(): void {
    this.data = this.service.applicationsData;
  }

  public onSelect(id:number):any{
    this.router.navigate(['/application/'+id])
  }

}
