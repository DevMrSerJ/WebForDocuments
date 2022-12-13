using Newtonsoft.Json;

namespace WebForDocuments.Models
{
	/// <summary>
	/// Модель ответа от сервера для получения списка документов.
	/// </summary>
	public class ProductList
	{
		/// <summary>
		/// Ошибка запроса.
		/// </summary>
		[JsonProperty("exception")]
		public ExceptionModel Error { get; set; }

		/// <summary>
		/// Список всех продуктов конкретного документа.
		/// </summary>
		[JsonProperty("data")]
		public ProductTableList Products { get; set; }

		/// <summary>
		/// Выходные параметры.
		/// </summary>
		[JsonProperty("outparams")]
		public object Outparams { get; set; }
	}
}
