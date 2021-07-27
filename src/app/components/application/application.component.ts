import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCallsService } from 'src/app/services/service-calls.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  data:any;
  constructor(private router:Router, private route:ActivatedRoute, private service:ServiceCallsService) { }

  ngOnInit(): void {
    this.service.getApplication(Number.parseInt(this.route.snapshot.params.get('id'))).subscribe(
      (res: any)=>{
      this.data = res;
    })
  }

}
