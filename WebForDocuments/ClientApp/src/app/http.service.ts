import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getDocuments() {
    return this.http.get("https://localhost:44363/api/document");
  }
}
