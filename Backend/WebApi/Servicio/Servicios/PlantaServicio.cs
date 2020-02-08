namespace Servicio.Servicios
{
    using Administador.Administrador;
    using Administador.Interfaces;
    using Administador.Model;
    using Common.Helpers;
    using Microsoft.Extensions.Configuration;
    using System.Collections.Generic;
    using System.Linq;

    public class PlantaServicio : IPlantaServicio
    {
        private IAdministrador<Planta> administrador;

        public IAdministrador<Planta> Administrador
        {
            get
            {
                if (this.administrador == null)
                {
                    this.administrador = new PlantaAdministrador();
                }

                return this.administrador;
            }
        }

        public PlantaServicio()
        {
        }

        public List<string> ObtenerLista()
        {
            return this.Administrador
                .GetAll()
                .Select(x => x.descripcion)
                .ToList<string>();
        }
    }
}
