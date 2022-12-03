export interface DocumentModel {
  id_pos: Number,
  id_record: Number,
  id_hd_route?: Number,
  nom_route: String,
  nom_zak: String,
  nom_nakl?: String
}

const documents: DocumentModel[] = [
  {
    "id_pos": 1,
    "id_record": 115725022,
    "nom_route": "0001276176",
    "nom_zak": "7805115625"
  },
  {
    "id_pos": 2,
    "id_record": 115725295,
    "nom_route": "0001276176",
    "nom_zak": "7805115828"
  },
  {
    "id_pos": 3,
    "id_record": 115725342,
    "id_hd_route": 1276176,
    "nom_route": "0001276176",
    "nom_zak": "7805115869"
  },
  {
    "id_pos": 4,
    "id_record": 115726854,
    "nom_route": "0001276176",
    "nom_zak": "7805116794"
  },
  {
    "id_pos": 5,
    "id_record": 115726857,
    "nom_route": "0001276176",
    "nom_zak": "7805116835",
  },
  {
    "id_pos": 6,
    "id_record": 115727095,
    "nom_route": "0001276176",
    "nom_zak": "7805117003",
    "nom_nakl": "8602438103"
  },
  {
    "id_pos": 7,
    "id_record": 115753167,
    "nom_route": "0001276176",
    "nom_zak": "7100127527"
  }
];

export class DocumentService {
  getDocuments(): DocumentModel[] {
    return documents;
  }
}
