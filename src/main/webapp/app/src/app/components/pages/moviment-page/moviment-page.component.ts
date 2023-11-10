import { Component, OnInit, Renderer2, ElementRef, ViewContainerRef} from '@angular/core';
import { MovimentService } from "../../../services/moviment.service";
import { Moviment} from "../../../domain/moviment";
import * as moment from 'moment'
import {Products} from "../../../domain/products";

@Component({
  selector: 'app-moviment-page',
  templateUrl: './moviment-page.component.html',
  styleUrls: ['./moviment-page.component.scss']
})
export class MovimentPageComponent implements OnInit {

  movimentArrayList: Array<Moviment> = new Array<Moviment>();

  constructor(protected movService: MovimentService,private renderer: Renderer2,private elemRef: ElementRef) { }

  ngOnInit(): void {
    this.movService.findAll().subscribe((res: Array<Moviment>) => {
      for(let i of res){
        this.movimentArrayList.push(i)
      }
    })
  }

  productsPage(){
    window.location.href = 'http://localhost:4200/product/#'
  }

  dateFormat(date?: Date){
    return moment(date).format('DD/MM/YYYY HH:MM:SS')
  }

  addMovimentacao(){
    window.location.href = "http://localhost:4200/moviment/new"
  }







}
