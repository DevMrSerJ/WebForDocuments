import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AllDocumentsPageComponent } from './all-documents-page/all-documents-page.component';
import { DocumentInfoPageComponent } from './document-info-page/document-info-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: AllDocumentsPageComponent },
  { path: 'documents', component: DocumentInfoPageComponent },
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
