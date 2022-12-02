"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentService = void 0;
var documents = [
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
var DocumentService = /** @class */ (function () {
    function DocumentService() {
    }
    DocumentService.prototype.getDocuments = function () {
        return documents;
    };
    return DocumentService;
}());
exports.DocumentService = DocumentService;
//# sourceMappingURL=document.service.js.map