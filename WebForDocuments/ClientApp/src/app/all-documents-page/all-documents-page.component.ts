import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Document,  DocumentService } from '../document.service';

@Component({
  selector: 'app-all-documents-page',
  templateUrl: './all-documents-page.component.html',
  styleUrls: ['./all-documents-page.component.scss']
})
export class AllDocumentsPageComponent {
  documents: Document[] = [];

  applyFilterTypes: any;

  currentFilter: any;

  showFilterRow: boolean;

  showHeaderFilter: boolean;

  columns: any;

  dataSource: any;

  isReady: boolean | undefined;

  taskSubject: string | undefined;

  taskDetailsHtml: SafeHtml | undefined;

  taskStatus: string | undefined;

  taskProgress: string | undefined;

  focusedRowKey = 117;

  autoNavigateToFocusedRow = true;
    sanitizer: any;

  constructor(service: DocumentService) {
    this.documents = service.getDocuments();
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

  onFocusedRowChanged(e: any) {
    const rowData = e.row && e.row.data;

    if (rowData) {
      this.taskSubject = rowData.Task_Subject;
      this.taskDetailsHtml = this.sanitizer.bypassSecurityTrustHtml(rowData.Task_Description);
      this.taskStatus = rowData.Task_Status;
      this.taskProgress = rowData.Task_Completion ? `${rowData.Task_Completion}` + '%' : '';
    }
  }
}
