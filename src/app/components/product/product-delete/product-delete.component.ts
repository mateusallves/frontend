import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../products/product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id')!
    if(id){
      const ia: number= parseInt(id)
    this.productService.readById(ia).subscribe(product=>{
      this.product = product
    })}
  }

  deleteProduct(): void{
    this.productService.delete(this.product.id!).subscribe(()=>{
      this.productService.showMessage('Produto Excluído')
      this.router.navigate(['/produtos'])
    })
  }

  cancel():void{
    this.router.navigate(['/produtos'])
  }
}
