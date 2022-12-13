using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebForDocuments.Models
{
	public class ProductModel
	{
		[JsonProperty("id_inst")]
		public long InstId { get; set; }

		[JsonProperty("id_pos")]
		public long PosId { get; set; }

		[JsonProperty("pos_type")]
		public string PosType { get; set; }

		[JsonProperty("pos_value")]
		public string PosValue { get; set; }

		[JsonProperty("pos_name")]
		public string PosName { get; set; }

		[JsonProperty("pos_group_id")]
		public string PosGroupId { get; set; }

		[JsonProperty("pos_group_name")]
		public string PosGroupName { get; set; }

		[JsonProperty("pos_category_id")]
		public string PosCategoryId { get; set; }

		[JsonProperty("pos_category_name")]
		public string PosCategoryName { get; set; }

		[JsonProperty("good_qty")]
		public int GoodQTY { get; set; }

		[JsonProperty("pos_number")]
		public long PosNumber { get; set; }

		[JsonProperty("id_good_nakl")]
		public long GoodNaklId { get; set; }

		[JsonProperty("place_qty")]
		public string PlaceQTY { get; set; }

		[JsonProperty("type_place")]
		public string TypePlace { get; set; }

		[JsonProperty("is_hole")]
		public bool IsHole { get; set; }

		[JsonProperty("is_certificate")]
		public bool IsCertificate { get; set; }

		[JsonProperty("top_500")]
		public long Top500 { get; set; }

		[JsonProperty("id_hd_nakl")]
		public long NaklHDId { get; set; }
	}
}
