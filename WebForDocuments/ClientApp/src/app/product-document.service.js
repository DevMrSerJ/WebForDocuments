"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDocumentService = void 0;
var products = [
    {
        "id_inst": 1,
        "id_pos": 1,
        "pos_type": "good",
        "pos_value": "3000376",
        "pos_name": "N. Creme для тела крем 250МЛ",
        "pos_group_id": "200001222",
        "pos_group_name": "ежедневный уходдля тела",
        "pos_category_id": "200000050",
        "pos_category_name": "уход за телом",
        "good_qty": 4.0,
        "pos_number": 1,
        "id_good_nakl": 903842698,
        "top_500": 0,
        "id_hd_nakl": 115725022
    },
    {
        "id_inst": 1,
        "id_pos": 2,
        "pos_type": "good",
        "pos_value": "3000374",
        "pos_name": "N. Creme для тела крем универсальный 150МЛ",
        "pos_group_id": "200001222",
        "pos_group_name": "ежедневный уход для тела",
        "pos_category_id": "200000050",
        "pos_category_name": "уход за телом",
        "good_qty": 4.0,
        "pos_number": 2,
        "id_good_nakl": 903842699,
        "top_500": 0,
        "id_hd_nakl": 115725022
    },
    {
        "id_inst": 1,
        "id_pos": 3,
        "pos_type": "good",
        "pos_value": "3000382",
        "pos_name": "N. Deo дезодорант жен аэр. антиперспирант Жемчужная красота 150МЛ",
        "pos_group_id": "200001056",
        "pos_group_name": "женский",
        "pos_category_id": "200000015",
        "pos_category_name": "дезодорант",
        "good_qty": 6.0,
        "pos_number": 3,
        "id_good_nakl": 903842700,
        "top_500": 0,
        "id_hd_nakl": 115725022
    },
    {
        "id_inst": 1,
        "id_pos": 4,
        "pos_type": "good",
        "pos_value": "3001216",
        "pos_name": "Colgate для детей зубная щетка Доктор заяц от 2-х лет 1ШТ",
        "pos_group_id": "210002312",
        "pos_group_name": "уход за полостью рта",
        "pos_category_id": "200000017",
        "pos_category_name": "для детей",
        "good_qty": 6.0,
        "pos_number": 4,
        "id_good_nakl": 903842701,
        "top_500": 0,
        "id_hd_nakl": 115725022
    }
];
var ProductDocumentService = /** @class */ (function () {
    function ProductDocumentService() {
    }
    ProductDocumentService.prototype.getProducts = function () {
        return products;
    };
    return ProductDocumentService;
}());
exports.ProductDocumentService = ProductDocumentService;
//# sourceMappingURL=product-document.service.js.map