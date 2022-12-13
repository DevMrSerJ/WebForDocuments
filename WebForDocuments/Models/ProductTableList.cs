using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebForDocuments.Models
{
	public class ProductTableList
	{
		[JsonProperty("data1")]
		public IEnumerable<DocumentModel> Documents { get; set; }

		[JsonProperty("data2")]
		public IEnumerable<ProductModel> ProductInfoList { get; set; }
	}
}
