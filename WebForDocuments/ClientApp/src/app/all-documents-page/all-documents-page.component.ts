import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DocumentModel } from '../document.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-documents-page',
  templateUrl: './all-documents-page.component.html',
  styleUrls: ['./all-documents-page.component.scss'],
  providers: [HttpService]
})
export class AllDocumentsPageComponent {
  /**
   * Документы.
   */
  documents: DocumentModel[] = [];

  /**
   * Типы фильтров.
   */
  applyFilterTypes: any;

  /**
   * Текущий фильтр.
   */
  currentFilter: any;

  /**
   * Показывать ли фильтр.
   */
  showFilterRow: boolean;

  /**
   * Показывать ли строку с сортировкой.
   */
  showHeaderFilter: boolean;

  /**
   * Колонки.
   */
  columns: any;

  /**
   * Данные для таблицы.
   */
  dataSource: any;

  /**
   * Ключ фокуса строки.
   */
  focusedRowKey = 117;

  /**
   * Автоматический переход к фокусировке строки.
   */
  autoNavigateToFocusedRow = true;

  /**
   * Конструктор.
   * @param router роутер для навигации.
   * @param httpService http-клиент для отправки запросов.
   */
  constructor(private router: Router, private httpService: HttpService) {
    this.setDocuments();
    this.showFilterRow = true;
    this.showHeaderFilter = true;

    this.applyFilterTypes = [{
      key: 'auto',
      name: 'Immediately',
    }, {
      key: 'onClick',
      name: 'On Button Click',
    }];
    this.currentFilter = this.applyFilterTypes[0].key;
  }

  /**
   * Устанавливает все документы, полученные с сервера.
   */
  setDocuments(): void {
    this.httpService.getDocuments().subscribe(
      (data: any) => {
        if (data.exception.error !== 0) {
          alert(data.exception.errorMessage);
          console.log(data.exception);
          return;
        }

        data.documents.forEach((i: any) => this.documents.push(
          {
            id_pos: i.positionId,
            id_record: i.recordId,
            id_hd_route: i.routeHdId,
            nom_route: i.numberRoute,
            nom_zak: i.numberZak,
            nom_nakl: i.numberNakl
          }
        ));
      },
      (error: any) => {
        alert(error.message);
        console.log(error);
      });
  }

  /**
   * Обработка изменения фокуса мыши.
   * @param e событие.
   */
  onFocusedRowChanging(e: any) {
    const rowsCount = e.component.getVisibleRows().length;
    const pageCount = e.component.pageCount();
    const pageIndex = e.component.pageIndex();
    const key = e.event && e.event.key;

    if (key && e.prevRowIndex === e.newRowIndex) {
      if (e.newRowIndex === rowsCount - 1 && pageIndex < pageCount - 1) {
        e.component.pageIndex(pageIndex + 1).done(() => {
          e.component.option('focusedRowIndex', 0);
        });
      } else if (e.newRowIndex === 0 && pageIndex > 0) {
        e.component.pageIndex(pageIndex - 1).done(() => {
          e.component.option('focusedRowIndex', rowsCount - 1);
        });
      }
    }
  }

  /**
   * Обработка двойного нажатия мыши на ячейку.
   * @param e событие.
   */
  onCellDblClick(e: any) {
    localStorage.setItem('documentId', JSON.stringify(e.row.data.id_record));

    this.router.navigateByUrl('/document');
  }
}
