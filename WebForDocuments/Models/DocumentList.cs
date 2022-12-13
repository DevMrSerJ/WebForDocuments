using Newtonsoft.Json;
using System.Collections.Generic;

namespace WebForDocuments.Models
{
	/// <summary>
	/// Модель ответа от сервера для получения списка документов.
	/// </summary>
	public class DocumentList
	{
		/// <summary>
		/// Ошибка запроса.
		/// </summary>
		[JsonProperty("exception")]
		public ExceptionModel Error { get; set; }

		/// <summary>
		/// Полученные документы.
		/// </summary>
		[JsonProperty("data")]
		public IEnumerable<DocumentModel> Documents { get; set; }

		/// <summary>
		/// Выходные параметры.
		/// </summary>
		[JsonProperty("outparams")]
		public object Outparams { get; set; }
	}
}
