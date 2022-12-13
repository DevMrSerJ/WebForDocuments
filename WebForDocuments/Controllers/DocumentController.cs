using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Net;
using WebForDocuments.Models;

namespace WebForDocuments.Controllers
{
	/// <summary>
	/// Контроллер для работы с документами.
	/// </summary>
	[ApiController]
	[Route("api/[controller]")]
	public class DocumentController : ControllerBase
	{
		/// <summary>
		/// Конфигуратор для работы с appSettings.
		/// </summary>
		private readonly IConfiguration _configuration;

		/// <summary>
		/// Конструктор.
		/// </summary>
		/// <param name="configuration">Конфигуратор.</param>
		public DocumentController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		/// <summary>
		/// Получение всех документов.
		/// </summary>
		/// <returns>Объект со всеми документами.</returns>
		[HttpGet]
		public object Get()
		{
			try
			{
				var documentList = new DocumentList();

				var url = _configuration.GetSection("DocumentsApiConfig").GetSection("UrlForAPI").GetValue<string>("GetDocuments");
				var login = _configuration.GetSection("DocumentsApiConfig").GetValue<string>("Login");
				var password = _configuration.GetSection("DocumentsApiConfig").GetValue<string>("Password");

				var request = WebRequest.Create(url);
				request.Credentials = new NetworkCredential(login, password);
				
				using (var response = request.GetResponse() as HttpWebResponse)
				{
					var responseStream = response.GetResponseStream();

					using (var reader = new StreamReader(responseStream))
					{
						var responseText = reader.ReadToEnd();

						documentList = JsonConvert.DeserializeObject<DocumentList>(responseText);
					}
				}

				return new
				{
					exception = new {
						error = 0,
						errorMessage = ""
					},
					documentList.Documents
				};
			}
			catch (Exception ex)
			{
				return new {
					error = 500,
					errorMessage = ex.Message
				}; 
			}
		}

		/// <summary>
		/// Получение продуктов у конкретного документа.
		/// </summary>
		/// <param name="id">id_record документа.</param>
		/// <returns>Объект со всеми его продуктами.</returns>
		[HttpGet("{Id}")]
		public object Get([FromRoute(Name = "Id")] long id)
		{
			try
			{
				var productList = new ProductList();

				var url = _configuration.GetSection("DocumentsApiConfig").GetSection("UrlForAPI").GetValue<string>("GetProducts");
				var login = _configuration.GetSection("DocumentsApiConfig").GetValue<string>("Login");
				var password = _configuration.GetSection("DocumentsApiConfig").GetValue<string>("Password");

				var request = WebRequest.Create(url + id);
				request.Credentials = new NetworkCredential(login, password);

				using (var response = request.GetResponse() as HttpWebResponse)
				{
					var responseStream = response.GetResponseStream();

					using (var reader = new StreamReader(responseStream))
					{
						var responseText = reader.ReadToEnd();

						productList = JsonConvert.DeserializeObject<ProductList>(responseText);
					}
				}

				return new
				{
					exception = new
					{
						error = 0,
						errorMessage = ""
					},
					productList.Products.ProductInfoList
				};
			}
			catch (Exception ex)
			{
				return new
				{
					error = 500,
					errorMessage = ex.Message
				};
			}
		}
	}
}
