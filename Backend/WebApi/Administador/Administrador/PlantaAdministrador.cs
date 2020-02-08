namespace Administador.Administrador
{
    using System.Collections.Generic;
    using System.Linq;
    using Interfaces;
    using Model;

    public class PlantaAdministrador : IAdministrador<Planta>
    {
        Model.MESEntities mesModelContext;

        public PlantaAdministrador()
        {
            this.mesModelContext = new Model.MESEntities();
        }

        public List<Planta> GetAll()
        {
            return this.mesModelContext.Planta.ToList();
        }
    }
}
