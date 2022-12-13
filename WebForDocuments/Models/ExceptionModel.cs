using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebForDocuments.Models
{
	public class ExceptionModel
	{
		[JsonProperty("error")]
		public int Error { get; set; }

		[JsonProperty("error_msg")]
		public string ErrorMessage { get; set; }
	}
}
