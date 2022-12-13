using Newtonsoft.Json;

namespace WebForDocuments.Models
{
	/// <summary>
	/// Модель ошибки.
	/// </summary>
	public class ExceptionModel
	{
		/// <summary>
		/// Код ошибки.
		/// </summary>
		[JsonProperty("error")]
		public int Error { get; set; }

		/// <summary>
		/// Сообщение об ошибке.
		/// </summary>
		[JsonProperty("error_msg")]
		public string ErrorMessage { get; set; }
	}
}
