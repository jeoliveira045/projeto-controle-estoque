import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Products} from "../../../domain/products";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  productArrayList: Array<Products> = new Array<Products>()

  constructor(protected productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.findAll().subscribe((res) => {
      for(let i of res){
        this.productArrayList.push(i)
      }
    })
  }

}
