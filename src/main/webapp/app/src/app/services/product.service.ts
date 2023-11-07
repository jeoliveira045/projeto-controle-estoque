import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Products} from "../domain/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_API: string = "http://localhost:8080/product"

  constructor(protected httpClient: HttpClient) { }

  public findAll(): Observable<any>{
    return this.httpClient.get(`${this.URL_API}`)
  }
}
