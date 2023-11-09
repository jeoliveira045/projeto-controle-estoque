import {
  AfterContentChecked,
  Component, destroyPlatform,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Products} from "../../../../../domain/products";
import {ProductService} from "../../../../../services/product.service";
import {NgSelectOption} from "@angular/forms";

@Component({
  selector: 'app-moviment-product-item',
  templateUrl: './moviment-product-item.component.html',
  styleUrls: ['./moviment-product-item.component.scss']
})
export class MovimentProductItemComponent implements OnInit{

  constructor(protected productService: ProductService) { }
  listStyles = {
    listStyle: 'none',
    display: 'inline-flex',
    paddingLeft: '0'
  }

  isAdded: boolean = false

  id: number = 1;
  nameList: Array<ProductMap> = new Array<ProductMap>()
  productChosen: ProductMap = new ProductMap();
  quantity?: number;

  name2: string = ''

  @Output() eventProduct: EventEmitter<any> = new EventEmitter<any>();

  @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>();

  addProduto(){
    let product = new Products();
    product.id = this.productChosen.id
    product.name = this.productChosen.name
    product.quantity = this.quantity
    this.eventProduct.emit(product);
    this.isAdded = true;
  }

  assignId(value: any){
    this.productChosen = value
  }


  ngOnInit(): void {
    this.productService.findAll().subscribe(res => {
      for(let i of res){
        this.nameList.push({id: i.id, name: i.name})
      }
    })
  }

}

export class ProductMap{
  id?: number
  name?: string;
}
