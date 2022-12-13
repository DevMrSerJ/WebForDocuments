using Newtonsoft.Json;
using System.Collections.Generic;

namespace WebForDocuments.Models
{
	/// <summary>
	/// Модель ответа от сервера для получения списка продуктов.
	/// </summary>
	public class ProductTableList
	{
		/// <summary>
		/// Информация о самом документе.
		/// </summary>
		[JsonProperty("data1")]
		public IEnumerable<DocumentModel> Documents { get; set; }

		/// <summary>
		/// Список всех продуктов.
		/// </summary>
		[JsonProperty("data2")]
		public IEnumerable<ProductModel> ProductInfoList { get; set; }
	}
}
