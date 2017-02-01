using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchindlerSwipeServer.Models
{
    public class FormInstanceFieldValue
    {
        public FormInstance FormInstance { get; set; }
        public FormTemplateField FormTemplateField { get; set; }
        public string Value { get; set; }
    }
}