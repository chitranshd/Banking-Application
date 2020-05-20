import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.css']
})
export class AdminContainerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public logout(){
    this.router.navigate(['Login']);
    }

}
