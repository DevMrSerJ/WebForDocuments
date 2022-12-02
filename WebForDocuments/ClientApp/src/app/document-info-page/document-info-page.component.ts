import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-info-page',
  templateUrl: './document-info-page.component.html',
  styleUrls: ['./document-info-page.component.scss']
})
export class DocumentInfoPageComponent {
  public recordId: Number;

  constructor(private router: Router, service: DocumentService) {
    this.recordId = router.getCurrentNavigation()?.extras?.state?.['id'];
  }
}
