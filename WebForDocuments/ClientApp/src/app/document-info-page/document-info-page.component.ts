import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentModel, DocumentService } from '../document.service';
import { ProductDocumentService, ProductModel } from '../product-document.service';

@Component({
  selector: 'app-document-info-page',
  templateUrl: './document-info-page.component.html',
  styleUrls: ['./document-info-page.component.scss']
})
export class DocumentInfoPageComponent {
  public recordId: Number;

  private document: DocumentModel;

  statuses: Array<number>;

  products: Array<Array<ProductModel>>;

  dataSource: any;

  constructor(private router: Router, service: ProductDocumentService) {
    this.recordId = router.getCurrentNavigation()?.extras?.state?.['id'];
    this.document = {
      id_pos: 9,
      id_record: 115725022,
      nom_route: "0001276176",
      nom_zak: "7805115625"
    };

    this.statuses = [0, 1];

    this.products = [service.getProducts(), []];

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(e: any) {
    this.products[e.toData].splice(e.toIndex, 0, e.itemData);
    this.products[e.fromData].splice(e.fromIndex, 1);
    
    console.log(e);
  }
}
