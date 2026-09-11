import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Activity, Baby, CalendarDays, ChevronDown, ChevronLeft, ChevronRight,
  ClipboardList, Clock3, Cross, Droplets, FileText, Heart, HeartPulse,
  Instagram, MapPin, Menu, Microscope, Navigation, Phone, ShieldCheck,
  Stethoscope, Users, X, Sparkles, CheckCircle2, ArrowUpRight
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import childImg from "@/assets/child.jpg";
import clinicImg from "@/assets/clinic.jpg";
import labImg from "@/assets/lab.jpg";
import ultrasoundImg from "@/assets/ultrasound.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Clínica Médica Pró-Saúde | Consultas e Exames em Macururé - BA" },
      {
        name: "description",
        content:
          "Consultas, exames e coleta laboratorial em Macururé - BA. Cardiologia, ginecologia, pediatria e mais, com atendimento humanizado para toda a família.",
      },
      { property: "og:title", content: "Clínica Médica Pró-Saúde | Macururé - BA" },
      {
        property: "og:description",
        content: "Consultas, exames e coleta laboratorial em um só lugar, com atendimento humanizado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const wa =
  "https://wa.me/557597018423?text=Ol%C3%A1!%20Quero%20agendar%20um%20atendimento%20na%20Cl%C3%ADnica%20M%C3%A9dica%20Pr%C3%B3-Sa%C3%BAde.";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=Clinica+Medica+Pro-Saude+Macurure+BA";

const navLinks: [string, string][] = [
  ["Início", "#inicio"],
  ["A Clínica", "#a-clinica"],
  ["Especialidades", "#especialidades"],
  ["Exames", "#exames"],
  ["Atendimento Infantil", "#atendimento-infantil"],
  ["Dúvidas", "#duvidas"],
  ["Contato", "#contato"],
];

const specialties = [
  [HeartPulse, "Cardiologia", "Cuidado cardiovascular, prevenção e acompanhamento para manter seu coração saudável."],
  [Baby, "Ginecologia", "Saúde feminina com acolhimento e acompanhamento em todas as fases da vida."],
  [Activity, "Urologia", "Prevenção, diagnóstico e cuidado completo para a saúde urinária e masculina."],
  [Cross, "Ortopedia", "Mais movimento e qualidade de vida com avaliação e cuidado especializado."],
  [Microscope, "Neurologia", "Atenção à saúde do cérebro, memória, equilíbrio e sistema nervoso."],
  [Droplets, "Nutrição", "Orientação alimentar individualizada para mais saúde, energia e bem-estar."],
  [Stethoscope, "Clínico Geral", "Atendimento completo para prevenção, avaliação e cuidado em todas as idades."],
] as const;

const exams = [
  [FileText, "Exames Laboratoriais", "Coleta segura e prática para diferentes tipos de exames."],
  [Microscope, "Ultrassonografia", "Imagens precisas para auxiliar na investigação e no diagnóstico."],
  [Activity, "Eletrocardiograma", "Avaliação da atividade elétrica e do ritmo do coração."],
  [Navigation, "MAPA", "Monitoramento da pressão arterial durante 24 horas."],
  [Clock3, "Holter", "Acompanhamento contínuo do ritmo cardíaco ao longo do dia."],
  [Droplets, "Espirometria", "Avaliação da capacidade e função respiratória."],
  [Activity, "Teste Ergométrico", "Avaliação cardiovascular durante esforço físico controlado."],
] as const;

const reviews = [
  ["Mariana Silva", "Atendimento excelente! Profissionais muito atenciosos, ambiente acolhedor e tudo muito organizado."],
  ["Carlos Mendes", "Realizei meus exames e fui muito bem atendido. Equipe preparada e resultado com muita agilidade."],
  ["Ana Paula", "Levei minha filha e fiquei encantada com o cuidado de toda a equipe. Atendimento humano de verdade!"],
  ["João Oliveira", "Clínica muito bem estruturada. Desde a recepção até o atendimento médico, tudo excelente."],
  ["Fernanda Alves", "Profissionais educados, ambiente confortável e atendimento que transmite confiança."],
] as const;

const faqs = [
  "Precisa estar em jejum para fazer exames laboratoriais?",
  "Qual o prazo para entrega dos resultados?",
  "Crianças também podem realizar exames?",
  "Como posso agendar uma consulta?",
  "Quais formas de pagamento são aceitas?",
];

function Button({
  children = "Agendar pelo WhatsApp",
  href = wa,
  light = false,
  icon = true,
}: {
  children?: React.ReactNode;
  href?: string;
  light?: boolean;
  icon?: boolean;
}) {
  const external = href.startsWith("http");
  return (
    <a
      className={`ps-btn ${light ? "ps-btn-light" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {icon && external && <Phone size={16} />}
      {children}
      {!external && <ArrowUpRight size={16} />}
    </a>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="ps-section-title">
      <span className="section-eyebrow">
        <Sparkles size={13} />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      <p>{sub}</p>
    </div>
  );
}

function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className={`ps-logo ${small ? "small" : ""}`}>
      <div className="logo-mark">
        <Heart size={small ? 16 : 20} fill="currentColor" />
        <Activity size={small ? 18 : 24} />
      </div>
      <div>
        <strong>PRÓ-SAÚDE</strong>
        <small>CLÍNICA MÉDICA</small>
      </div>
    </div>
  );
}

function Carousel({ children, label }: { children: React.ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 18 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };
  return (
    <div className="carousel">
      <div className="carousel-viewport" ref={ref} role="group" aria-label={label}>
        {children}
      </div>
      <div className="carousel-nav">
        <button type="button" aria-label="Ver anteriores" onClick={() => scrollBy(-1)}>
          <ChevronLeft size={20} />
        </button>
        <button type="button" aria-label="Ver próximos" onClick={() => scrollBy(1)}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

function Index() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);

  return (
    <div className="ps-page">
      <header className="ps-header">
        <a href="#inicio" aria-label="Início">
          <Logo small />
        </a>
        <nav>
          {navLinks.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-wa" href={wa} target="_blank" rel="noreferrer">
          <span className="header-wa-icon">
            <Phone size={16} />
          </span>
          <span>
            Agende pelo WhatsApp
            <br />
            <b>(75) 9701-8423</b>
          </span>
        </a>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Abrir menu">
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      {menu && (
        <div className="mobile-menu">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
          <Button />
        </div>
      )}

      <main>
        <section id="inicio" className="ps-hero">
          <div className="hero-copy">
            <span className="mini-label">Clínica Médica Pró-Saúde · Macururé - BA</span>
            <h1>
              Um lugar para <em>cuidar de você</em> e de quem você ama.
            </h1>
            <p>
              Consultas, exames e coleta laboratorial em um só lugar, com profissionais especializados e
              atendimento humanizado para toda a família.
            </p>
            <div className="hero-actions">
              <Button />
              <Button light href="#especialidades">
                Ver especialidades
              </Button>
            </div>
            <div className="hero-trust">
              <span>
                <CheckCircle2 /> Atendimento humanizado
              </span>
              <span>
                <CheckCircle2 /> Adultos e crianças
              </span>
              <span>
                <CheckCircle2 /> Consultas e exames
              </span>
            </div>
          </div>
          <div className="hero-photo">
            <img src={heroImg} alt="Família sendo recebida na Clínica Médica Pró-Saúde" width={1600} height={1104} />
            <div className="hero-photo-overlay" />
            <div className="hero-logo">
              <Logo />
            </div>
            <div className="hero-message">
              <small>CUIDADO QUE ACOLHE</small>
              <strong>Saúde em todas as fases da vida.</strong>
              <Heart size={22} fill="currentColor" />
            </div>
          </div>
        </section>

        <section id="especialidades" className="ps-section">
          <SectionTitle
            eyebrow="Nossas especialidades"
            title="Especialidades para cuidar de você"
            sub="Uma equipe preparada para acompanhar diferentes necessidades, com atenção, precisão e acolhimento."
          />
          <Carousel label="Especialidades">
            {specialties.map(([Icon, name, text], i) => (
              <article className="specialty-card" key={name}>
                <div className="card-icon">
                  <Icon />
                </div>
                <span className="card-number">0{i + 1}</span>
                <h3>{name}</h3>
                <p>{text}</p>
                <a className="link-btn" href={wa} target="_blank" rel="noreferrer">
                  Agendar atendimento <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </Carousel>
          <div className="section-cta">
            <Button>Agendar minha consulta</Button>
          </div>
        </section>

        <section id="exames" className="ps-exams">
          <div className="exam-head">
            <div>
              <span className="section-eyebrow">
                <ClipboardList size={13} /> Exames e serviços
              </span>
              <h2>Precisão para cuidar melhor da sua saúde.</h2>
              <p>Exames selecionados para facilitar sua rotina e apoiar um diagnóstico mais completo.</p>
            </div>
            <Button light>Falar com a equipe</Button>
          </div>
          <Carousel label="Exames">
            {exams.map(([Icon, name, text], i) => (
              <article className="exam-card" key={name}>
                <div className="exam-visual">
                  {i % 3 === 0 ? (
                    <img src={labImg} alt="Coleta laboratorial" loading="lazy" width={900} height={700} />
                  ) : i % 3 === 1 ? (
                    <img src={ultrasoundImg} alt="Exame de ultrassonografia" loading="lazy" width={900} height={700} />
                  ) : (
                    <div className="exam-icon">
                      <Icon />
                    </div>
                  )}
                </div>
                <div className="exam-card-body">
                  <span>EXAME</span>
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <a className="link-btn" href={wa} target="_blank" rel="noreferrer">
                    Saiba mais <ArrowUpRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </Carousel>
          <div className="lab-banner">
            <div className="lab-badge">
              <Microscope />
            </div>
            <div>
              <b>COLETA LABORATORIAL</b>
              <span>Praticidade, segurança e acolhimento em cada etapa.</span>
            </div>
            <a href={wa} target="_blank" rel="noreferrer">
              Conhecer <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        <section id="atendimento-infantil" className="ps-three">
          <article className="child-card">
            <img src={childImg} alt="Pediatra atendendo crianças" loading="lazy" width={1000} height={1200} />
            <div className="card-overlay" />
            <div className="child-content">
              <span className="mini-label light-label">Atendimento infantil</span>
              <h2>Cuidado especial para os pequenos.</h2>
              <p>Um ambiente acolhedor para que crianças e famílias se sintam seguras em cada atendimento.</p>
              <Button>Saiba mais</Button>
            </div>
          </article>

          <article className="why-card">
            <span className="section-eyebrow">
              <Heart size={13} /> Por que a Pró-Saúde?
            </span>
            <h2>Cuidado que começa no atendimento.</h2>
            <p className="why-lead">
              Da recepção ao acompanhamento, cada detalhe foi pensado para tornar sua experiência mais tranquila.
            </p>
            <div className="why-list">
              {[
                "Atendimento humanizado",
                "Diversas especialidades",
                "Adultos e crianças",
                "Coleta laboratorial",
                "Ambiente organizado",
                "Fácil agendamento",
                "Resultados confiáveis",
                "Localização acessível",
              ].map((x) => (
                <p key={x}>
                  <CheckCircle2 />
                  {x}
                </p>
              ))}
            </div>
          </article>

          <article className="map-mini">
            <div className="map-pattern" />
            <div className="map-pin">
              <MapPin />
            </div>
            <span className="section-eyebrow">Onde estamos</span>
            <h2>
              Macururé <b>· BA</b>
            </h2>
            <p>Em frente ao Hospital Municipal</p>
            <div className="map-location">
              <span>●</span>
              <div>
                <b>PRÓ-SAÚDE</b>
                <small>Clínica Médica</small>
              </div>
            </div>
            <a href={mapUrl} target="_blank" rel="noreferrer">
              Como chegar <Navigation size={14} />
            </a>
          </article>
        </section>

        <section className="ps-strip">
          <div>
            <span>Precisa de atendimento?</span>
            <h2>Sua saúde não pode esperar.</h2>
          </div>
          <a className="strip-wa" href={wa} target="_blank" rel="noreferrer">
            <Phone />
            <span>
              Falar pelo WhatsApp
              <br />
              <b>(75) 9701-8423</b>
            </span>
          </a>
          <div className="strip-feature">
            <CalendarDays />
            <span>
              Agendamento
              <br />
              <b>rápido</b>
            </span>
          </div>
          <div className="strip-feature">
            <ShieldCheck />
            <span>
              Atendimento
              <br />
              <b>seguro</b>
            </span>
          </div>
          <div className="strip-feature">
            <Heart />
            <span>
              Cuidado de
              <br />
              <b>verdade</b>
            </span>
          </div>
        </section>

        <section id="a-clinica" className="ps-about">
          <div className="about-photo">
            <img src={clinicImg} alt="Recepção da Clínica Médica Pró-Saúde" loading="lazy" width={1200} height={1000} />
            <div className="about-photo-badge">
              <Heart fill="currentColor" />
              <span>
                Um ambiente
                <br />
                <b>feito para acolher</b>
              </span>
            </div>
          </div>
          <div className="about-copy">
            <span className="section-eyebrow">A Clínica Médica Pró-Saúde</span>
            <h2>Saúde com proximidade, confiança e cuidado.</h2>
            <p>
              A Clínica Médica Pró-Saúde está em Macururé - BA para oferecer atendimento de qualidade, com
              profissionais especializados, exames modernos e um cuidado humanizado para toda a família.
            </p>
            <div className="values">
              <div>
                <Heart />
                <b>Nossa missão</b>
                <small>Cuidar de você e da sua família com respeito, ética e acolhimento.</small>
              </div>
              <div>
                <ShieldCheck />
                <b>Nossa visão</b>
                <small>Ser referência em saúde na nossa região.</small>
              </div>
              <div>
                <Users />
                <b>Nossos valores</b>
                <small>Humanização, qualidade, segurança e confiança.</small>
              </div>
            </div>
            <Button>Conheça a clínica</Button>
          </div>
        </section>

        <section className="ps-reviews">
          <SectionTitle
            eyebrow="O que nossos pacientes dizem"
            title="Confiança de quem já escolheu a Pró-Saúde"
            sub="Experiências reais de pacientes que encontraram acolhimento, organização e cuidado."
          />
          <Carousel label="Avaliações de pacientes">
            {reviews.map(([name, text]) => (
              <article className="review-card" key={name}>
                <div className="review-top">
                  <div className="avatar">
                    {name
                      .split(" ")
                      .map((x) => x[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <b>{name}</b>
                    <div className="stars">★★★★★</div>
                  </div>
                  <span className="quote-mark">“</span>
                </div>
                <p>“{text}”</p>
                <div className="review-foot">
                  <CheckCircle2 size={14} /> Paciente da Pró-Saúde
                </div>
              </article>
            ))}
          </Carousel>
          <div className="review-note">
            <CheckCircle2 size={15} /> Atendimento que deixa uma boa impressão do começo ao fim.
          </div>
        </section>

        <section id="duvidas" className="ps-faq">
          <div className="faq-intro">
            <span className="section-eyebrow">Dúvidas frequentes</span>
            <h2>Tem alguma dúvida?</h2>
            <p>
              Reunimos respostas rápidas para facilitar seu atendimento. Se precisar, fale diretamente com nossa
              equipe.
            </p>
            <Button>Tirar minha dúvida</Button>
          </div>
          <div className="faq-list">
            {faqs.map((q, i) => (
              <div className={`faq-item ${faq === i ? "open" : ""}`} key={q}>
                <button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}>
                  <span>0{i + 1}</span>
                  <b>{q}</b>
                  <ChevronDown />
                </button>
                {faq === i && (
                  <p>
                    Fale com nossa equipe pelo WhatsApp para receber todas as orientações de acordo com o seu
                    atendimento.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="ps-contact">
          <div className="contact-copy">
            <span className="section-eyebrow">Fale com a Pró-Saúde</span>
            <Logo />
            <h2>Estamos prontos para acolher você e sua família.</h2>
            <p>Agende sua consulta ou tire suas dúvidas com nossa equipe.</p>
            <Button>Agendar atendimento</Button>
            <div className="contact-details">
              <span>
                <Phone /> (75) 9701-8423
              </span>
              <span>
                <MapPin /> Macururé - BA
              </span>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              title="Mapa da Clínica Médica Pró-Saúde em Macururé - BA"
              src="https://www.google.com/maps?q=Clinica%20Medica%20Pro-Saude%20Macurure%20BA&output=embed"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <div>
            <Logo />
            <p>Saúde, confiança e acolhimento para Macururé e toda a família.</p>
          </div>
          <div>
            <h3>Links rápidos</h3>
            {navLinks.slice(0, 5).map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <h3>Contato</h3>
            <a href={wa} target="_blank" rel="noreferrer">
              <Phone /> (75) 9701-8423
            </a>
            <span>
              <MapPin /> Macururé - BA — Em frente ao Hospital Municipal
            </span>
            <a href="https://instagram.com/prosaude.macurure" target="_blank" rel="noreferrer">
              <Instagram /> @prosaude.macurure
            </a>
          </div>
          <div>
            <h3>Nossa missão</h3>
            <p>“Cuidar de você e da sua família com respeito, ética e acolhimento, em todas as fases da vida.”</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Clínica Médica Pró-Saúde. Todos os direitos reservados.</span>
          <span>Política de Privacidade | Termos de Uso</span>
        </div>
      </footer>

      <a
        className="floating-wa"
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Pró-Saúde pelo WhatsApp"
      >
        <Phone />
      </a>
    </div>
  );
}
