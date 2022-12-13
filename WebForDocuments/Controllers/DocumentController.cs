using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using WebForDocuments.Models;

namespace WebForDocuments.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class DocumentController : ControllerBase
	{
		private readonly IConfiguration _configuration;

		public DocumentController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		[HttpGet]
		public object Get()
		{
			try
			{
				var result = new Answer();

				var url = _configuration.GetSection("DocumentsApiConfig").GetValue<string>("UrlForAPI");
				var login = _configuration.GetSection("DocumentsApiConfig").GetValue<string>("Login");
				var password = _configuration.GetSection("DocumentsApiConfig").GetValue<string>("Login");

				var request = WebRequest.Create(url);
				request.Credentials = new NetworkCredential(login, password);
				
				using (var response = request.GetResponse() as HttpWebResponse)
				{
					var responseStream = response.GetResponseStream();

					using (var reader = new StreamReader(responseStream))
					{
						var responseText = reader.ReadToEnd();

						result = JsonConvert.DeserializeObject<Answer>(responseText);
					}
				}

				return result;
			}
			catch (Exception ex)
			{
				return new {
					error = 500,
					errorMessage = ex.Message
				}; 
			}
		}
	}
}
