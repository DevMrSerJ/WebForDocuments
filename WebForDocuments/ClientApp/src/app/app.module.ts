import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DxDataGridModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { AllDocumentsPageComponent } from './all-documents-page/all-documents-page.component';
import { DocumentInfoPageComponent } from './document-info-page/document-info-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { DocumentService } from './document.service';

const appRoutes: Routes = [
  { path: '', component: AllDocumentsPageComponent },
  { path: 'document', component: DocumentInfoPageComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AllDocumentsPageComponent,
    DocumentInfoPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    NgbAlertModule,
    RouterModule.forRoot(appRoutes),
    DxDataGridModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
