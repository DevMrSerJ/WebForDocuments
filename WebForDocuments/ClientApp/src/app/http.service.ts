import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../environments/environment";

@Injectable()
export class HttpService {
  /**
   * Конструктор.
   * @param http http клиент для отправки запросов.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Получить все документы.
   */
  public getDocuments() {
    return this.http.get(environment.apiDocuments.url);
  }

  /**
   * Получить все продукты конкретного документа.
   * @param id Id документа.
   */
  public getProducts(id: string) {
    return this.http.get(environment.apiDocuments.url + id);
  }
}
