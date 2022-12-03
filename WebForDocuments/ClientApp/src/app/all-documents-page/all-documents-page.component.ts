import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentModel,  DocumentService } from '../document.service';

@Component({
  selector: 'app-all-documents-page',
  templateUrl: './all-documents-page.component.html',
  styleUrls: ['./all-documents-page.component.scss']
})
export class AllDocumentsPageComponent {
  documents: DocumentModel[] = [];

  applyFilterTypes: any;

  currentFilter: any;

  showFilterRow: boolean;

  showHeaderFilter: boolean;

  columns: any;

  dataSource: any;

  focusedRowKey = 117;

  autoNavigateToFocusedRow = true;

  constructor(private router: Router, service: DocumentService) {
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

  onCellDblClick(e: any) {
    console.log(e);
    this.router.navigateByUrl('/document', {
      state: {
        id: e.row.data.id_record
      }
    });
  }
}
