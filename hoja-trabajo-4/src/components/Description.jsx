// Sección con la descripción general del lugar
function Description() {
  return (
    <section id="descripcion" className="tarjeta">
      <h2>Descripción del lugar</h2>
      <p>
        El <strong>Volcán de Ipala</strong> se encuentra en el límite entre los
        departamentos de Chiquimula y Jutiapa, en el oriente de Guatemala, a
        unas 3.5 horas en carro desde la Ciudad de Guatemala. Tiene una altitud
        de 1,650 metros sobre el nivel del mar.
      </p>
      <p>
        Su atractivo principal es la <strong>laguna de agua dulce</strong> que
        se formó en la cima del cráter, de aproximadamente 1,000 metros de
        diámetro. El área es administrada como zona protegida por el CONAP. La
        caminata hasta el cráter toma alrededor de 2 horas y, para quienes lo
        prefieran, es posible rentar un caballo para subir.
      </p>

      <ul className="datos">
        <li>
          <strong>Ubicación:</strong> Chiquimula / Jutiapa, oriente de Guatemala
        </li>
        <li>
          <strong>Altitud:</strong> 1,650 msnm
        </li>
        <li>
          <strong>Laguna:</strong> 1,000 m de diámetro, área protegida (CONAP)
        </li>
        <li>
          <strong>Caminata:</strong> aprox. 2 horas (o a caballo)
        </li>
      </ul>
    </section>
  );
}

export default Description;
