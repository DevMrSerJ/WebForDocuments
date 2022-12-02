import { Component } from '@angular/core';
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
}
