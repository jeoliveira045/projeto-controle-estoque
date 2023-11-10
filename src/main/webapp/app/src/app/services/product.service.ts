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

  public findById(id: number){
    return this.httpClient.get(`${this.URL_API}/${id}`)
  }

  public insert(resource: Products){
    return this.httpClient.post(`${this.URL_API}`, resource)
  }

  public save(resource: Products){
    return resource['id']?this.httpClient.put(`${this.URL_API}/${resource['id']}`,resource):this.insert(resource)
  }

  public delete(id: number){
    return this.httpClient.delete(`${this.URL_API}/${id}`)
  }


}
