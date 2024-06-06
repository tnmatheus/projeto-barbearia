export default function LandingPage() {
  return (
    <div className="container">
      <header className="limitar-secao">
        <div>
          <img src="assets/barbearia-logo.png" alt="logomarca" />
          <button className="btn">
            <img src="assets/moon.png" alt="icone" />
            Dark
          </button>
        </div>
      </header>
      <section className="secao-img"></section>
      <section className="secao-textos">
        <div>
          <h1>Bem-vindo a Barber Shop</h1>
          <p>
            Nossa barbearia sempre oferece profissionais de qualidade e estamos
            prontos para lidar com suas maiores expectativas.
          </p>
          <p>
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
            equipe premiada que demonstrou o talento de mestres barbeiros em
            vários concursos de estilo. Deixe nosso barbeiro ser seu estilista
            pessoal e você nunca ficará desapontado.
          </p>
          <p>S. Kelly</p>
        </div>
      </section>
    </div>
  );
}
