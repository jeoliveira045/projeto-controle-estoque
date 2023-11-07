import {
  AfterContentChecked,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Products} from "../../domain/products";

@Component({
  selector: 'app-moviment-product-item',
  templateUrl: './moviment-product-item.component.html',
  styleUrls: ['./moviment-product-item.component.scss']
})
export class MovimentProductItemComponent implements OnInit{

  constructor() { }
  listStyles = {
    listStyle: 'none',
    display: 'inline-flex',
    paddingLeft: '0'
  }
  name: FormControl<any> = new FormControl<any>('')

  quantity = new FormControl();
  unitValue = new FormControl();

  @Output() eventProduct: EventEmitter<any> = new EventEmitter<any>();


  addProduto(){
    let product = new Products();
    product.name = this.name.value;
    product.quantity = this.quantity.value;
    product.unityValue = this.unitValue.value;
    this.eventProduct.emit(product);
  }

  ngOnInit(): void {
  }

}
