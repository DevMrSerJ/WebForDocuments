import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../environments/environment";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getDocuments() {
    return this.http.get(environment.apiDocuments.url);
  }

  public getProducts(id: string) {
    return this.http.get(environment.apiDocuments.url + id);
  }
}
