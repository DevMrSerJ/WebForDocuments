import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ProductModel } from '../product-document.service';

@Component({
  selector: 'app-document-info-page',
  templateUrl: './document-info-page.component.html',
  styleUrls: ['./document-info-page.component.scss']
})
export class DocumentInfoPageComponent {
  statuses: Array<number>;

  products: Array<Array<ProductModel>>;

  dataSource: any;

  constructor(private router: Router, private httpService: HttpService) {
    this.statuses = [0, 1];
    this.products = [[], []];

    let storage = localStorage.getItem('documentId');

    if (storage === null) {
      return;
    }

    let recordId = JSON.parse(storage);

    this.setProducts(recordId);

    this.onAdd = this.onAdd.bind(this);
  }

  setProducts(recordId: any) {
    this.httpService.getProducts(recordId).subscribe(
      (data: any) => {
        if (data.exception.error !== 0) {
          alert(data.exception.errorMessage);
          console.log(data.exception);
          return;
        }

        data.productInfoList.forEach((i: any) => this.products[0].push(
          {
            id_inst: i.instId,
            id_pos: i.posId,
            pos_type: i.posType,
            pos_value: i.posValue,
            pos_name: i.posName,
            pos_group_id: i.posGroupId,
            pos_group_name: i.posGroupName,
            pos_category_id: i.posCategoryId,
            pos_category_name: i.posCategoryName,
            good_qty: i.goodQTY,
            pos_number: i.posNumber,
            id_good_nakl: i.goodNaklId,
            place_qty: i.placeQTY,
            type_place: i.typePlace,
            is_hole: i.isHole,
            is_certificate: i.isCertificate,
            top_500: i.top500,
            id_hd_nakl: i.naklHDId
          }
        ));
      },
      (error: any) => {
        alert(error.message);
        console.log(error);
      });
  }

  onAdd(e: any) {
    this.products[e.toData].splice(e.toIndex, 0, e.itemData);
    this.products[e.fromData].splice(e.fromIndex, 1);
    
    console.log(e);
  }
}
