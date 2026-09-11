import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, Baby, CalendarDays, ChevronDown, ChevronLeft, ChevronRight,
  ClipboardList, Clock3, Cross, Droplets, FileText, Heart, HeartPulse,
  Instagram, MapPin, Menu, Microscope, Navigation, Phone, ShieldCheck,
  Stethoscope, Syringe, Users, X, Sparkles, CheckCircle2, ArrowUpRight
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const wa = "https://wa.me/557597018423?text=Ol%C3%A1!%20Quero%20agendar%20um%20atendimento%20na%20Cl%C3%ADnica%20M%C3%A9dica%20Pr%C3%B3-Sa%C3%BAde.";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=Clinica+Medica+Pro-Saude+Macurure+BA";

const images = {
  hero: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=90",
  child: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=90",
  clinic: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=90",
  doctor: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=90",
  family: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1200&q=90",
  ultrasound: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=90",
  lab: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=90",
  exam: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=90",
};

const specialties = [
  [HeartPulse, "Cardiologia", "Cuidado cardiovascular, prevenção e acompanhamento para manter seu coração saudável."],
  [Syringe, "Ginecologia", "Saúde feminina com acolhimento e acompanhamento em todas as fases da vida."],
  [Activity, "Urologia", "Prevenção, diagnóstico e cuidado completo para a saúde urinária e masculina."],
  [Cross, "Ortopedia", "Mais movimento e qualidade de vida com avaliação e cuidado especializado."],
  [Microscope, "Neurologia", "Atenção à saúde do cérebro, memória, equilíbrio e sistema nervoso."],
  [Droplets, "Nutrição", "Orientação alimentar individualizada para mais saúde, energia e bem-estar."],
  [Stethoscope, "Clínico Geral", "Atendimento completo para prevenção, avaliação e cuidado em todas as idades."],
];

const exams = [
  [FileText, "Exames Laboratoriais", "Coleta segura e prática para diferentes tipos de exames."],
  [Microscope, "Ultrassonografia", "Imagens precisas para auxiliar na investigação e no diagnóstico."],
  [Activity, "Eletrocardiograma", "Avaliação da atividade elétrica e do ritmo do coração."],
  [Navigation, "MAPA", "Monitoramento da pressão arterial durante 24 horas."],
  [Clock3, "Holter", "Acompanhamento contínuo do ritmo cardíaco ao longo do dia."],
  [Droplets, "Espirometria", "Avaliação da capacidade e função respiratória."],
  [Activity, "Teste Ergométrico", "Avaliação cardiovascular durante esforço físico controlado."],
];

const reviews = [
  ["Mariana Silva", "Atendimento excelente! Profissionais muito atenciosos, ambiente acolhedor e tudo muito organizado. Me senti realmente cuidada."],
  ["Carlos Mendes", "Realizei meus exames e fui muito bem atendido. Equipe preparada, processo organizado e resultado com muita agilidade."],
  ["Ana Paula", "Levei minha filha e fiquei encantada com o cuidado e a atenção de toda a equipe. Atendimento humano de verdade!"],
  ["João Oliveira", "Clínica muito bem estruturada e atendimento impecável. Desde a recepção até o atendimento médico, tudo excelente."],
  ["Fernanda Alves", "Gostei muito da experiência. Profissionais educados, ambiente confortável e atendimento que transmite confiança."],
];

function Button({ children = "Agendar pelo WhatsApp", href = wa, light = false }: { children?: React.ReactNode; href?: string; light?: boolean }) {
  return <a className={`ps-btn ${light ? "ps-btn-light" : ""}`} href={href} target="_blank" rel="noreferrer"><Phone size={16} />{children}<ArrowUpRight size={15} /></a>;
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return <div className="ps-section-title"><span className="section-eyebrow"><Sparkles size={13} />{eyebrow}</span><h2>{title}</h2><p>{sub}</p></div>;
}

function Logo({ small = false }: { small?: boolean }) {
  return <div className={`ps-logo ${small ? "small" : ""}`}><div className="logo-mark"><Heart size={small ? 18 : 25} fill="currentColor" /><Activity size={small ? 18 : 25} /></div><div><strong>PRÓ-SAÚDE</strong><small>CLÍNICA MÉDICA</small></div></div>;
}

function SpecialtyTrack() {
  const items = [...specialties, ...specialties];
  return <div className="marquee-shell"><div className="specialty-track">{items.map(([Icon, name, text], i) => <article className="specialty-card" key={`${name}-${i}`}><div className="card-icon"><Icon /></div><span className="card-number">0{(i % specialties.length) + 1}</span><h3>{name as string}</h3><p>{text as string}</p><a href={wa} target="_blank" rel="noreferrer">Agendar atendimento <ArrowUpRight size={14} /></a></article>)}</div></div>;
}

function ExamTrack() {
  const items = [...exams, ...exams];
  return <div className="marquee-shell exams-shell"><div className="exam-track">{items.map(([Icon, name, text], i) => <article className="exam-card" key={`${name}-${i}`}><div className="exam-visual">{i % 3 === 0 ? <img src={images.lab} alt="Exame laboratorial" /> : i % 3 === 1 ? <img src={images.ultrasound} alt="Ultrassonografia" /> : <div className="exam-icon"><Icon /></div>}</div><div className="exam-card-body"><span>EXAME</span><h3>{name as string}</h3><p>{text as string}</p><a href={wa} target="_blank" rel="noreferrer">Saiba mais <ArrowUpRight size={13} /></a></div></article>)}</div></div>;
}

function ReviewTrack() {
  const items = [...reviews, ...reviews];
  return <div className="review-marquee"><div className="review-track">{items.map(([name, text], i) => <article className="review-card" key={`${name}-${i}`}><div className="review-top"><div className="avatar">{(name as string).split(" ").map(x => x[0]).slice(0, 2).join("")}</div><div><b>{name as string}</b><div className="stars">★★★★★</div></div><span className="quote-mark">“</span></div><p>“{text as string}”</p><div className="review-foot"><CheckCircle2 size={14} /> Paciente da Pró-Saúde</div></article>)}</div></div>;
}

function Index() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);
  return <div className="ps-page">
    <header className="ps-header"><a href="#inicio"><Logo small /></a><nav>{["Início", "A Clínica", "Especialidades", "Exames", "Atendimento Infantil", "Dúvidas", "Contato"].map((x, i) => <a key={x} href={i === 0 ? "#inicio" : `#${x.toLowerCase().replaceAll(" ", "-")}`}>{x}</a>)}</nav><a className="header-wa" href={wa} target="_blank" rel="noreferrer"><span className="header-wa-icon"><Phone size={17} /></span><span>Agende pelo WhatsApp<br /><b>(75) 9701-8423</b></span></a><button className="menu-btn" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button></header>
    {menu && <div className="mobile-menu">{["Início", "A Clínica", "Especialidades", "Exames", "Atendimento Infantil", "Dúvidas", "Contato"].map((x, i) => <a onClick={() => setMenu(false)} key={x} href={i === 0 ? "#inicio" : `#${x.toLowerCase().replaceAll(" ", "-")}`}>{x}</a>)}</div>}

    <main>
      <section id="inicio" className="ps-hero">
        <div className="hero-copy"><span className="mini-label">CLÍNICA MÉDICA PRÓ-SAÚDE · MACURURÉ - BA</span><h1>Um lugar para <em>cuidar de você</em><br />e de quem você ama.</h1><p>Consultas, exames e coleta laboratorial em um só lugar, com profissionais especializados, atendimento humanizado e uma experiência pensada para toda a família.</p><div className="hero-actions"><Button /><Button light href="#especialidades">Conheça nossas especialidades</Button></div><div className="hero-trust"><span><CheckCircle2 /> Atendimento humanizado</span><span><CheckCircle2 /> Adultos e crianças</span><span><CheckCircle2 /> Consultas e exames</span></div></div>
        <div className="hero-photo"><img src={images.hero} alt="Família recebendo cuidado médico" /><div className="hero-photo-overlay" /><div className="hero-logo"><Logo /></div><div className="hero-message"><small>CUIDADO QUE ACOLHE</small><strong>Saúde em todas<br />as fases da vida.</strong><Heart size={22} /></div></div>
      </section>

      <section id="especialidades" className="ps-section specialties"><SectionTitle eyebrow="NOSSAS ESPECIALIDADES" title="Especialidades para cuidar de você" sub="Uma equipe preparada para acompanhar diferentes necessidades, com atenção, precisão e acolhimento." /><SpecialtyTrack /><div className="section-cta"><Button>Agendar minha consulta</Button></div></section>

      <section id="exames" className="ps-exams"><div className="exam-head"><div><span className="section-eyebrow"><ClipboardList size={13} /> EXAMES E SERVIÇOS</span><h2>Precisão para cuidar melhor da sua saúde.</h2><p>Exames selecionados para facilitar sua rotina e apoiar um diagnóstico mais completo.</p></div><Button light href={wa}>Falar com a equipe</Button></div><ExamTrack /><div className="lab-banner"><div className="lab-badge"><Microscope /></div><div><b>COLETA LABORATORIAL</b><span>Praticidade, segurança e acolhimento em cada etapa.</span></div><a href={wa} target="_blank" rel="noreferrer">Conhecer <ArrowUpRight size={14} /></a></div></section>

      <section id="atendimento-infantil" className="ps-three"><article className="child-card"><img src={images.child} alt="Atendimento infantil" /><div className="card-overlay" /><div className="child-content"><span className="mini-label light-label">ATENDIMENTO INFANTIL</span><h2>Cuidado especial para os pequenos.</h2><p>Um ambiente acolhedor para que crianças e famílias se sintam seguras em cada atendimento.</p><Button href={wa}>Saiba mais</Button></div></article><article className="why-card"><span className="section-eyebrow"><Heart size={13} /> POR QUE A PRÓ-SAÚDE?</span><h2>Cuidado que começa no atendimento.</h2><p className="why-lead">Da recepção ao acompanhamento, cada detalhe foi pensado para tornar sua experiência mais tranquila.</p><div className="why-list">{["Atendimento humanizado", "Diversas especialidades", "Adultos e crianças", "Exames e coleta laboratorial", "Ambiente organizado", "Fácil agendamento", "Resultados confiáveis", "Localização acessível"].map(x => <p key={x}><CheckCircle2 />{x}</p>)}</div></article><article className="map-mini"><div className="map-pattern" /><div className="map-pin"><MapPin /></div><span className="section-eyebrow">ONDE ESTAMOS</span><h2>Macururé <b>· BA</b></h2><p>Em frente ao Hospital Municipal</p><div className="map-location"><span>●</span><div><b>PRÓ-SAÚDE</b><small>Clínica Médica</small></div></div><a href={mapUrl} target="_blank" rel="noreferrer">Como chegar <Navigation size={14} /></a></article></section>

      <section className="ps-strip"><div><span>PRECISA DE ATENDIMENTO?</span><h2>Sua saúde não pode esperar.</h2></div><a className="strip-wa" href={wa} target="_blank" rel="noreferrer"><Phone /> <span>Falar pelo WhatsApp<br /><b>(75) 9701-8423</b></span></a><div className="strip-feature"><CalendarDays /><span>Agendamento<br /><b>rápido</b></span></div><div className="strip-feature"><ShieldCheck /><span>Atendimento<br /><b>seguro</b></span></div><div className="strip-feature"><Heart /><span>Cuidado de<br /><b>verdade</b></span></div></section>

      <section id="a-clínica" className="ps-about"><div className="about-photo"><img src={images.clinic} alt="Recepção da Clínica Médica Pró-Saúde" /><div className="about-photo-badge"><Heart fill="currentColor" /><span>Um ambiente<br /><b>feito para acolher</b></span></div></div><div className="about-copy"><span className="section-eyebrow">A CLÍNICA MÉDICA PRÓ-SAÚDE</span><h2>Saúde com proximidade, confiança e cuidado.</h2><p>A Clínica Médica Pró-Saúde está em Macururé - BA para oferecer atendimento de qualidade, com profissionais especializados, exames modernos e um cuidado humanizado para toda a família.</p><div className="values"><div><Heart /><b>Nossa missão</b><small>Cuidar de você e da sua família com respeito, ética e acolhimento.</small></div><div><ShieldCheck /><b>Nossa visão</b><small>Ser referência em saúde na nossa região.</small></div><div><Users /><b>Nossos valores</b><small>Humanização, qualidade, segurança e confiança.</small></div></div><Button href={wa}>Conheça a clínica</Button></div></section>

      <section className="ps-reviews"><SectionTitle eyebrow="O QUE NOSSOS PACIENTES DIZEM" title="Confiança de quem já escolheu a Pró-Saúde" sub="Experiências reais de pacientes que encontraram acolhimento, organização e cuidado." /><ReviewTrack /><div className="review-note"><CheckCircle2 size={15} /> Atendimento que deixa uma boa impressão do começo ao fim.</div></section>

      <section id="dúvidas" className="ps-faq"><div className="faq-intro"><span className="section-eyebrow">DÚVIDAS FREQUENTES</span><h2>Tem alguma dúvida?</h2><p>Reunimos respostas rápidas para facilitar seu atendimento. Se precisar, fale diretamente com nossa equipe.</p><Button href={wa}>Tirar minha dúvida</Button></div><div className="faq-list">{["Precisa estar em jejum para fazer exames laboratoriais?", "Qual o prazo para entrega dos resultados?", "Crianças também podem realizar exames?", "Como posso agendar uma consulta?", "Quais formas de pagamento são aceitas?"].map((q, i) => <div className={`faq-item ${faq === i ? "open" : ""}`} key={q}><button onClick={() => setFaq(faq === i ? null : i)}><span>0{i + 1}</span><b>{q}</b><ChevronDown /></button>{faq === i && <p>Entre em contato pelo WhatsApp para receber todas as orientações da equipe Pró-Saúde de acordo com o seu atendimento.</p>}</div>)}</div></section>

      <section id="contato" className="ps-contact"><div className="contact-copy"><span className="section-eyebrow">FALE COM A PRÓ-SAÚDE</span><Logo /><h2>Estamos prontos para acolher você e sua família.</h2><p>Agende sua consulta ou tire suas dúvidas com nossa equipe.</p><Button href={wa}>Agendar atendimento</Button><div className="contact-details"><span><Phone /> (75) 9701-8423</span><span><MapPin /> Macururé - BA</span></div></div><div className="contact-map"><iframe title="Google Maps - Clínica Médica Pró-Saúde em Macururé BA" src="https://www.google.com/maps?q=Clinica%20Medica%20Pro-Saude%20Macurure%20BA&output=embed" loading="lazy" /></div></section>
    </main>

    <footer><div className="footer-top"><div><Logo /><p>Saúde, confiança e acolhimento para Macururé e toda a família.</p></div><div><h3>Links rápidos</h3><a href="#inicio">Início</a><a href="#a-clínica">A Clínica</a><a href="#especialidades">Especialidades</a><a href="#exames">Exames</a><a href="#dúvidas">Dúvidas</a></div><div><h3>Contato</h3><a href={wa} target="_blank" rel="noreferrer"><Phone /> (75) 9701-8423</a><span><MapPin /> Macururé - BA<br />Em frente ao Hospital Municipal</span><a href="https://instagram.com/prosaude.macurure" target="_blank" rel="noreferrer"><Instagram /> @prosaude.macurure</a></div><div><h3>Nossa missão</h3><p>“Cuidar de você e da sua família com respeito, ética e acolhimento, em todas as fases da vida.”</p><Heart /></div></div><div className="footer-bottom"><span>© 2024 Clínica Médica Pró-Saúde. Todos os direitos reservados.</span><span>Política de Privacidade &nbsp; | &nbsp; Termos de Uso</span></div></footer>
    <a className="floating-wa" href={wa} target="_blank" rel="noreferrer" aria-label="Falar com a Pró-Saúde pelo WhatsApp"><Phone /></a>
  </div>;
}
