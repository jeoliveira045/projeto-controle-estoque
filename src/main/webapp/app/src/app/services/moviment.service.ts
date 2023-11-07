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
}
