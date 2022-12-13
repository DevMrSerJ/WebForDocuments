using Newtonsoft.Json;

namespace WebForDocuments.Models
{
	/// <summary>
	/// Модель документа.
	/// </summary>
	public class DocumentModel
	{
		[JsonProperty("id_pos")]
		public long? PositionId { get; set; }

		[JsonProperty("id_record")]
		public long? RecordId { get; set; }

		[JsonProperty("id_hd_route")]
		public long? RouteHdId { get; set; }

		[JsonProperty("nom_route")]
		public string NumberRoute { get; set; }

		[JsonProperty("nom_zak")]
		public string NumberZak { get; set; }

		[JsonProperty("nom_nakl")]
		public string NumberNakl { get; set; }
	}
}
