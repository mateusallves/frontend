import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private headerSevice:HeaderService) {
    headerSevice.headerData = {
      title: 'Lista de Produtos',
      icon: 'storefront',
      routeUrl: '/produtos'
    }
  }
  ngOnInit(): void {
  }

}
