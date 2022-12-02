import { Injectable } from '@angular/core';

export interface Document {
  DocumentID: Number,
  FullName: String,
  Position: String,
}

const documents: Document[] = [{
  "DocumentID": 1,
  "FullName": "Nancy Davolio",
  "Position": "Sales Representative"
}, {
  "DocumentID": 2, 
  "FullName": "Andrew Fuller",
  "Position": "Vice President, Sales"
}, {
  "DocumentID": 3,
  "FullName": "Janet Leverling",
  "Position": "Sales Representative"
  }, {
  "DocumentID": 4,
  "FullName": "Margaret Peacock",
  "Position": "Sales Representative"
  }, {
  "DocumentID": 5,
  "FullName": "Steven Buchanan",
  "Position": "Sales Manager"
  }, {
  "DocumentID": 6,
  "FullName": "Michael Suyama",
  "Position": "Sales Representative"
  }, {
  "DocumentID": 7,
  "FullName": "Robert King",
  "Position": "Sales Representative"
  }, {
  "DocumentID": 8,
  "FullName": "Laura Callahan",
  "Position": "Inside Sales Coordinator"
  }, {
  "DocumentID": 9,
  "FullName": "Brett Wade",
  "Position": "Sales Representative"
}];

export class DocumentService {
  getDocuments(): Document[] {
    return documents;
  }
}
