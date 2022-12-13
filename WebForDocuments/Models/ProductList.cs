using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebForDocuments.Models
{
	public class ProductList
	{
		[JsonProperty("exception")]
		public ExceptionModel Error { get; set; }

		[JsonProperty("data")]
		public ProductTableList Products { get; set; }

		[JsonProperty("outparams")]
		public object Outparams { get; set; }
	}
}
