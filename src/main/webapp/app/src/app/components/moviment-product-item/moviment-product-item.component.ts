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

  index: number| null = 0;

  @Output() eventProduct: EventEmitter<any> = new EventEmitter<any>();

  @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>();
  private onlySelf: any;
  private emitEvent: any;


  addProduto(){
    let product = new Products();
    product.name = this.name.value;
    product.quantity = this.quantity.value;
    product.unityValue = this.unitValue.value;
    this.eventProduct.emit(product);
    this.name.disable({onlySelf: true, emitEvent: true})
    this.quantity.disable({onlySelf: true, emitEvent: true})
    this.unitValue.disable({onlySelf: true, emitEvent: true})
  }

  verificarIndex(){
    console.log(this.index)
  }

  deleteProduto(){
    this.closeEvent.emit(null)
  }



  ngOnInit(): void {
  }

}
