import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';  
import {map} from "rxjs/operators";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: any= [];

  constructor(private router: Router,
    private Http: HttpClient) { }

  ngOnInit() {
    this.getCities().subscribe(res=>{
      console.log("Res", res);
      this.cities = res;
    })
  }
  
  getCities(){
    return this.Http
    .get("assets/files/cities.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

  
 
}
