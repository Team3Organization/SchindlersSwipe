using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchindlerSwipeServer.Models
{
    public class FormInstance
    {
        public int ID { get; set; }
        public FormTemplate FormTemplate { get; set; }
        public User User { get; set; }
        public int FlowInstanceId { get; set; }
    }
}