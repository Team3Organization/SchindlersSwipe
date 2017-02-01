using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchindlerSwipeServer.Models
{
    public class FormTemplateField
    {
        public int Id { get; set; }
        public FormTemplate FormTemplate { get; set; }
        public Field Field { get; set; }
    }
}