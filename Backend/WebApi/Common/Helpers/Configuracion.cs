namespace Common.Helpers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using Microsoft.Extensions.Configuration;

    public class Configuracion : IConfiguracion
    {
        private IConfiguration configuracion;
        
        public Configuracion(IConfiguration configuracion)
        {
            this.configuracion = configuracion;
        }

        public string ConnectionString
        {
            get 
            {
                return this.configuracion.GetSection("DefaultConnection:ConnectionString").Value;
            } 
        }
    }
}
