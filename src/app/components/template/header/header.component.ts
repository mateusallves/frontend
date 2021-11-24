import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService:HeaderService) { }

  ngOnInit(): void {
  }

  get title(): String{
   return this.headerService.headerData.title
  }
  get icon (): String{
   return this.headerService.headerData.icon
  }
  get routeUrl(): String{
   return this.headerService.headerData.routeUrl
  }

}
