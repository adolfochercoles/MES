//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Administador.Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class Ingrediente
    {
        public int id { get; set; }
        public int idReceta { get; set; }
        public string descripcion { get; set; }
    
        public virtual Receta Receta { get; set; }
    }
}
