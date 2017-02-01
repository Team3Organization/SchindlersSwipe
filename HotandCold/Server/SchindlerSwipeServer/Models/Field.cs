using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchindlerSwipeServer.Models
{
    public class Field
    {
        public int Id { get; set; }
        public string FieldType { get; set; }
        public IdType IdType { get; set; }
    }
}