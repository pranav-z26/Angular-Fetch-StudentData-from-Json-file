import { MaybeForwardRefExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services/services.service'
import { TimetableM } from '../../models/timetable/timetable.module'

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  myarrid: String =""



  constructor(private ServicesService: ServicesService) { 
    
  }



  ngOnInit(): void {
  }
  
  myarr: Array<TimetableM> = []
  isShown: boolean = false ;
  getData() {
    this.ServicesService.getData().subscribe(data => this.myarr = [...data]);
    // let i = 0;
    
    // for(i=0; i < this.myarr.length; i++){
    //   // console.log(this.myarr[i])
    //   this.myarrid = this.myarr[i].id
    // }
    this.isShown = ! this.isShown;
  }









}
