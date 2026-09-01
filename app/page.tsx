// Internal workspace sites can read the authenticated OpenAI user from the
// forwarded request headers:
//
// import { headers } from "next/headers";
//
// export default async function Home() {
//   const requestHeaders = await headers();
//   const email = requestHeaders.get("oai-authenticated-user-email");
//   const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
//   const fullName =
//     encodedFullName &&
//     requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
//       "percent-encoded-utf-8"
//       ? decodeURIComponent(encodedFullName)
//       : null;
//   const displayName = fullName ?? email;
//   // ...
// }

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media"><img src="/aureo-hero.jpg" alt="Personal trainer em estúdio de treino" /></div>
        <nav className="nav shell" aria-label="Navegação principal">
          <a className="brand" href="#inicio">AUR<span>EO</span></a>
          <div className="nav-links"><a href="#metodo">Método</a><a href="#planos">Programas</a><a href="#resultados">Resultados</a></div>
          <a className="nav-cta" href="#contato">Agendar avaliação <Arrow /></a>
        </nav>
        <div className="hero-content shell" id="inicio">
          <p className="eyebrow">Personal training • São Paulo</p>
          <h1>Construa um corpo<br /><em>à altura da sua rotina.</em></h1>
          <p className="hero-copy">Treinamento individual, estratégia e constância para quem quer evoluir com precisão — sem atalhos e sem planos genéricos.</p>
          <a className="primary-btn" href="#contato">Começar minha evolução <Arrow /></a>
        </div>
        <div className="hero-foot shell"><span>01 — 05</span><span>Performance guiada por método</span><span className="scroll-cue">Role para descobrir ↓</span></div>
      </section>

      <section className="intro shell" id="metodo">
        <p className="section-label">O MÉTODO AUREO</p>
        <div><h2>O treino certo não ocupa seu dia.<br /><em>Ele transforma o que você faz com ele.</em></h2><p>Uma experiência de treinamento particular que une diagnóstico, periodização e acompanhamento próximo. Cada decisão é feita para o seu corpo, seus objetivos e a vida que você realmente leva.</p></div>
      </section>

      <section className="stats"><div className="shell stats-grid"><div><strong>+8</strong><span>anos guiando evoluções</span></div><div><strong>1:1</strong><span>atenção em cada sessão</span></div><div><strong>360°</strong><span>visão de performance</span></div><div><strong>0</strong><span>planos prontos ou cópias</span></div></div></section>

      <section className="programs shell" id="planos">
        <div className="section-top"><p className="section-label">PROGRAMAS</p><p>Escolha a estrutura que acompanha o seu momento.</p></div>
        <div className="program-grid">
          <article className="program-card"><span>01</span><h3>Fundação</h3><p>Para começar com clareza, técnica e uma base que sustenta resultados reais.</p><ul><li>Avaliação completa</li><li>Treino presencial 2x/semana</li><li>Acompanhamento por app</li></ul><a href="#contato">Conhecer programa <Arrow /></a></article>
          <article className="program-card featured"><span>02</span><p className="card-tag">MAIS ESCOLHIDO</p><h3>Performance</h3><p>Uma estratégia completa para quem quer elevar físico, energia e disciplina.</p><ul><li>Treino presencial 3x/semana</li><li>Ajustes semanais</li><li>Direção de hábitos</li></ul><a href="#contato">Conhecer programa <Arrow /></a></article>
          <article className="program-card"><span>03</span><h3>Elite</h3><p>Consultoria de alta proximidade para metas que exigem o seu máximo.</p><ul><li>Agenda prioritária</li><li>Treino presencial flexível</li><li>Monitoramento contínuo</li></ul><a href="#contato">Conhecer programa <Arrow /></a></article>
        </div>
      </section>

      <section className="quote-band"><div className="shell"><p className="section-label">NÃO É SOBRE PERFEIÇÃO</p><blockquote>“Consistência fica mais fácil quando o plano finalmente respeita você.”</blockquote><span>— CAIO AUREO, PERSONAL TRAINER</span></div></section>

      <section className="results shell" id="resultados"><div className="results-copy"><p className="section-label">EXPERIÊNCIA</p><h2>Resultado é o que você vê.<br /><em>Processo é o que te mantém lá.</em></h2><p>Você sabe exatamente o que fazer, por que está fazendo e como está evoluindo. Sem ruído. Sem improviso.</p><a href="#contato" className="text-link">Ver como funciona <Arrow /></a></div><div className="steps"><div><b>01</b><h3>Diagnóstico</h3><p>Mapeamos histórico, rotina, mobilidade e objetivos antes de qualquer prescrição.</p></div><div><b>02</b><h3>Estratégia</h3><p>Seu plano é construído para caber na agenda e desafiar na medida certa.</p></div><div><b>03</b><h3>Evolução</h3><p>Revisões frequentes transformam dados, percepção e consistência em progresso.</p></div></div></section>

      <section className="contact" id="contato"><div className="shell contact-inner"><p className="section-label">PRONTO PARA COMEÇAR?</p><h2>Seu próximo nível<br />começa em uma conversa.</h2><p>Agende uma avaliação inicial e descubra o programa ideal para o seu momento.</p><a className="primary-btn light" href="mailto:contato@aureo.demo">Solicitar avaliação <Arrow /></a><small>Projeto demonstrativo para portfólio. Dados e contatos fictícios.</small></div></section>
      <footer className="shell"><a className="brand" href="#inicio">AUR<span>EO</span></a><span>© 2026 • Personal Training</span><span>Instagram &nbsp; LinkedIn</span></footer>
    </main>
  );
}
