using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebForDocuments.Models
{
	public class Answer
	{
		[JsonProperty("exception")]
		public ExceptionModel Error { get; set; }

		[JsonProperty("data")]
		public IEnumerable<DocumentModel> Documents { get; set; }

		[JsonProperty("outparams")]
		public object Outparams { get; set; }
	}
}
