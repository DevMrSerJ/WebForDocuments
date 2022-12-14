/**
* Модель продукта.
*/
export interface ProductModel {
  id_inst: Number,
  id_pos: Number,
  pos_type: String,
  pos_value: String,
  pos_name: String,
  pos_group_id: String,
  pos_group_name: String,
  pos_category_id: String,
  pos_category_name: String,
  good_qty: Number,
  pos_number: Number,
  id_good_nakl: Number,
  place_qty?: String,
  type_place?: String,
  is_hole?: Boolean,
  is_certificate?: Boolean,
  top_500: Number,
  id_hd_nakl: Number
}
