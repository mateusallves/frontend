import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router,private headerSevice:HeaderService) {
    headerSevice.headerData = {
      title: 'Cadastro de produtos',
      icon: 'assignment',
      routeUrl: '/cadastro'
    }
  }
  ngOnInit(): void {
  }
 navProductCreate(): void {
   this.router.navigate(['/cadastro/create'])
 }
}
