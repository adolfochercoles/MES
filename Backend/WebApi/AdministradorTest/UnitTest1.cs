using System;
using Administador.Administrador;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AdministradorTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var administrador = new PlantaAdministrador();
            var l = administrador.GetAll();
        }
    }
}
