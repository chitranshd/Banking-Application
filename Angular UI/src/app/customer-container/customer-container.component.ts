import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-container',
  templateUrl: './customer-container.component.html',
  styleUrls: ['./customer-container.component.css']
})
export class CustomerContainerComponent implements OnInit {

  customerName:string;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.customerName=this.route.snapshot.params["username"];
  }

  public logout(){
    sessionStorage.clear();
    this.router.navigate(['Login']);
    }
  
}
