import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Moviment} from "../domain/moviment";

@Injectable({
  providedIn: 'root'
})
export class MovimentService {

  URL_API: string = "http://localhost:8080/moviment"


  constructor(protected httpClient: HttpClient) {

  }
  public findAll(): Observable<any> {
    return this.httpClient.get(`${this.URL_API}`)
  }

  public findById(id: number){
    return this.httpClient.get(`${this.URL_API}/${id}`)
  }

  public insert(resource: Moviment){
    this.httpClient.post<Moviment>(`${this.URL_API}`,resource).subscribe(res => res)
  }

  public save(resource: Moviment, id: number){
    resource['id']?this.httpClient.put(`${this.URL_API}/${resource['id']}`,resource):this.insert(resource)
  }

  public delete(id: number){
    this.httpClient.delete(`${this.URL_API}/${id}`)
  }

}
