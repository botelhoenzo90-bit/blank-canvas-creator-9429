import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, Baby, CalendarDays, ChevronDown, ChevronLeft, ChevronRight,
  ClipboardList, Clock3, Cross, Droplets, FileText, Heart, HeartPulse,
  Instagram, MapPin, Menu, Microscope, Navigation, Phone, ShieldCheck,
  Stethoscope, Syringe, Users, X
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const wa = "https://wa.me/557597018423?text=Olá!%20Quero%20agendar%20um%20atendimento%20na%20Clínica%20Médica%20Pró-Saúde.";
const images = {
  hero: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
  child: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=85",
  clinic: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1100&q=85",
  doctor: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
  family: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1100&q=85",
  ultrasound: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=85",
  lab: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=85",
};

const specialties = [
  [HeartPulse,"Cardiologia","Um coração saudável para uma vida mais longa."],
  [Syringe,"Ginecologia","Saúde feminina em todas as fases da vida."],
  [Activity,"Urologia","Cuidar da sua saúde também é força."],
  [Cross,"Ortopedia","Movimento, qualidade de vida e mais liberdade."],
  [Microscope,"Neurologia","Saúde para o seu cérebro, equilíbrio para a sua vida."],
  [Droplets,"Nutrição","Alimentação saudável para um futuro que leve mais vida."],
  [Stethoscope,"Clínico Geral","Cuidado em todas as fases da sua vida."],
];
const exams = [
  [FileText,"Exames Laboratoriais","Diversos exames com resultados confiáveis."],
  [Microscope,"Ultrassonografia","Diagnóstico preciso com tecnologia moderna."],
  [Activity,"Eletrocardiograma","Avaliação da saúde do seu coração."],
  [Navigation,"MAPA","Monitoramento da pressão arterial 24h."],
  [Clock3,"Holter","Monitoramento contínuo do ritmo cardíaco."],
  [Droplets,"Espirometria","Avaliação da função respiratória."],
  [Activity,"Teste Ergométrico","Avaliação do coração durante o esforço físico."],
];
const reviews = [
  ["Mariana Silva","“Atendimento excelente! Profissionais muito atenciosos e um ambiente acolhedor.”"],
  ["Carlos Mendes","“Realizei meus exames e fui muito bem atendido. Tudo organizado e com resultado rápido.”"],
  ["Ana Paula","“Levei minha filha e fiquei encantada com o cuidado e a atenção de toda a equipe. Recomendo!”"],
  ["João Oliveira","“Equipe muito preparada, atendimento humanizado e uma clínica impecável.”"],
];

function Button({children="Agendar pelo WhatsApp", href=wa, light=false}:{children?:React.ReactNode;href?:string;light?:boolean}) {
  return <a className={`ps-btn ${light?"ps-btn-light":""}`} href={href} target="_blank" rel="noreferrer"><Phone size={16}/>{children}<span>›</span></a>;
}
function SectionTitle({eyebrow,title,sub}:{eyebrow:string;title:string;sub:string}) {
  return <div className="ps-section-title"><span>{eyebrow}</span><h2>{title}</h2><p>{sub}</p></div>;
}
function Logo({small=false}:{small?:boolean}) {
  return <div className={`ps-logo ${small?"small":""}`}><div className="logo-mark"><Heart size={small?20:28} fill="currentColor"/><Activity size={small?20:28}/></div><div><strong>PRÓ-SAÚDE</strong><small>CLÍNICA MÉDICA</small></div></div>;
}
function Index() {
  const [menu,setMenu]=useState(false); const [review,setReview]=useState(0); const [faq,setFaq]=useState<number|null>(null);
  return <div className="ps-page">
    <header className="ps-header"><Logo small/><nav>{["Início","A Clínica","Especialidades","Exames","Atendimento Infantil","Dúvidas","Contato"].map((x,i)=><a key={x} href={i===0?"#inicio":`#${x.toLowerCase().replaceAll(" ","-")}`}>{x}</a>)}</nav><a className="header-wa" href={wa} target="_blank" rel="noreferrer"><Phone size={18}/> <span>Agende pelo WhatsApp<br/><b>(75) 9701-8423</b></span></a><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
    {menu&&<div className="mobile-menu">{["Início","A Clínica","Especialidades","Exames","Atendimento Infantil","Dúvidas","Contato"].map((x,i)=><a onClick={()=>setMenu(false)} key={x} href={i===0?"#inicio":`#${x.toLowerCase().replaceAll(" ","-")}`}>{x}</a>)}</div>}
    <main>
      <section id="inicio" className="ps-hero"><div className="hero-copy"><span className="mini-label">CLÍNICA MÉDICA PRÓ-SAÚDE</span><h1>Um lugar para<br/><b>cuidar de você e<br/>de quem você ama.</b></h1><p>Consultas, exames e coleta laboratorial em Macururé - BA, com uma experiência mais acolhedora para adultos, crianças e toda a família.</p><div className="hero-actions"><Button/><Button light href="#especialidades">Ver especialidades</Button></div><div className="hero-points"><span><Users/> Atendimento humanizado</span><span><Heart/> Adultos e crianças</span><span><ClipboardList/> Consultas e exames</span><span><Cross/> Ambiente acolhedor</span></div></div><div className="hero-photo"><img src={images.family} alt="Família"/><div className="hero-logo"><Logo/></div><div className="hero-message">Saúde<br/><b>em todas as<br/>fases da vida.</b><Heart size={20}/></div></div></section>
      <section id="especialidades" className="ps-section specialties"><SectionTitle eyebrow="NOSSAS ESPECIALIDADES" title="Especialidades para cuidar de você" sub="Atendimento completo, com profissionais especializados, acolhimento e foco na sua saúde."/><div className="card-grid">{specialties.map(([Icon,name,text])=><article className="specialty-card" key={name as string}><Icon/><h3>{name as string}</h3><p>{text as string}</p><a href={wa} target="_blank" rel="noreferrer">Agendar <span>›</span></a></article>)}</div></section>
      <section id="exames" className="ps-exams"><div className="exam-head"><div><span>EXAMES E SERVIÇOS</span><h2><ClipboardList/> Tecnologia, precisão e cuidado para você e sua família.</h2></div><Button light href={wa}>Ver todos os exames</Button></div><div className="exam-grid">{exams.map(([Icon,name,text],i)=><article className="exam-card" key={name as string}>{i<2?<img src={i===0?images.lab:images.ultrasound} alt="Exame"/>:<div className="exam-icon"><Icon/></div>}<h3>{name as string}</h3><p>{text as string}</p><a href={wa} target="_blank" rel="noreferrer">Ver exames <ChevronRight size={13}/></a></article>)}<article className="lab-banner"><Microscope/><div><b>COLETA LABORATORIAL</b><small>Com segurança, cuidado e acolhimento.</small></div><a href={wa} target="_blank" rel="noreferrer">Saiba mais ›</a></article></div></section>
      <section id="atendimento-infantil" className="ps-three"><article className="child-card"><img src={images.child} alt="Atendimento infantil"/><div><span>Atendimento</span><h2>Infantil</h2><p>Cuidado especial para os pequenos, com acolhimento, atenção e segurança.</p><Button href={wa}>Saiba mais</Button></div></article><article className="why-card"><h2>Por que escolher<br/>a Pró-Saúde?</h2>{["Atendimento humanizado","Diversas especialidades","Adultos e crianças","Exames e coleta laboratorial","Ambiente organizado","Fácil agendamento","Resultados confiáveis","Localização acessível"].map(x=><p key={x}>✓ {x}</p>)}</article><article className="map-mini"><MapPin size={32}/><h2>Estamos em<br/><b>Macururé - BA</b></h2><p>Em frente ao Hospital Municipal</p><div className="map-dots">⌖ <span>PRÓ-SAÚDE<br/>Clínica Médica</span></div><a href="https://www.google.com/maps/search/?api=1&query=Clinica+Medica+Pro-Saude+Macurure+BA" target="_blank" rel="noreferrer">Como chegar ›</a></article></section>
      <section className="ps-strip"><div><h2>Sua saúde não pode esperar.</h2><p>Entre em contato e agende seu atendimento.</p></div><a href={wa} target="_blank" rel="noreferrer"><Phone/> Falar pelo WhatsApp<br/><b>(75) 9701-8423</b></a><span><CalendarDays/> Agendamento<br/>rápido</span><span><ShieldCheck/> Atendimento<br/>seguro</span><span><Heart/> Cuidado de<br/>verdade</span></section>
      <section id="a-clínica" className="ps-about"><div className="about-photo"><img src={images.clinic} alt="Recepção da clínica"/><div><Logo/></div></div><div className="about-copy"><span className="mini-label">A CLÍNICA MÉDICA PRÓ-SAÚDE</span><h2>A Clínica Médica Pró-Saúde</h2><p>A Clínica Médica Pró-Saúde está em Macururé - BA para oferecer atendimento de qualidade, com profissionais especializados, exames modernos e um cuidado humanizado para toda a família.</p><div className="values"><div><Heart/><b>Nossa missão</b><small>Cuidar de você e da sua família com respeito, ética e acolhimento.</small></div><div><ShieldCheck/><b>Nossa visão</b><small>Ser referência em saúde na nossa região.</small></div><div><Users/><b>Nossos valores</b><small>Humanização, qualidade, segurança e confiança.</small></div></div><Button href="#a-clínica">Saiba mais sobre a clínica</Button></div></section>
      <section className="ps-reviews"><SectionTitle eyebrow="O QUE NOSSOS PACIENTES DIZEM" title="O que nossos pacientes dizem" sub="A confiança de quem já escolheu a Pró-Saúde."/><div className="review-wrap"><button onClick={()=>setReview((review-1+reviews.length)%reviews.length)}><ChevronLeft/></button><div className="review-card"><div className="avatar">{(reviews[review][0] as string)[0]}</div><div><b>{reviews[review][0] as string}</b><div className="stars">★★★★★</div><p>{reviews[review][1] as string}</p></div></div><button onClick={()=>setReview((review+1)%reviews.length)}><ChevronRight/></button></div><div className="dots">{reviews.map((_,i)=><button key={i} className={i===review?"active":""} onClick={()=>setReview(i)}/>)}</div></section>
      <section id="dúvidas" className="ps-faq"><div className="faq-intro"><span className="mini-label">DÚVIDAS FREQUENTES</span><h2>Dúvidas frequentes</h2><p>Tire suas dúvidas e venha para a Pró-Saúde.</p><Button href={wa}>Ver todas as dúvidas</Button></div><div className="faq-list">{["Precisa estar em jejum para fazer exames laboratoriais?","Qual o prazo para entrega dos resultados?","Crianças também podem realizar exames?","Como posso agendar uma consulta?","Quais formas de pagamento são aceitas?"].map((q,i)=><div className={`faq-item ${faq===i?"open":""}`} key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>⊙</span>{q}<b>{faq===i?"−":"+"}</b></button>{faq===i&&<p>Entre em contato pelo WhatsApp para receber todas as orientações da equipe Pró-Saúde.</p>}</div>)}</div></section>
      <section id="contato" className="ps-contact"><div><Logo/><h2>Fale com a Pró-Saúde</h2><p>Estamos prontos para acolher você e sua família.</p><Button href={wa}>Agendar atendimento</Button></div><div className="contact-map"><iframe title="Google Maps - Macururé BA" src="https://www.google.com/maps?q=Macururé%2C%20Bahia%2C%20Brazil&output=embed" loading="lazy"/></div></section>
    </main>
    <footer><div className="footer-top"><Logo/><div><h3>Links rápidos</h3><a href="#inicio">Início</a><a href="#a-clínica">A Clínica</a><a href="#especialidades">Especialidades</a><a href="#exames">Exames</a></div><div><h3>Contato</h3><a href={wa} target="_blank" rel="noreferrer"><Phone/> (75) 9701-8423</a><span><MapPin/> Macururé - BA<br/>Em frente ao Hospital Municipal</span><a href="https://instagram.com/prosaude.macurure" target="_blank" rel="noreferrer"><Instagram/> @prosaude.macurure</a></div><div><h3>Nossa missão</h3><p>“Cuidar de você e da sua família com respeito, ética e acolhimento, em todas as fases da vida.”</p><Heart/></div></div><div className="footer-bottom">© 2024 Clínica Médica Pró-Saúde. Todos os direitos reservados.<span>Política de Privacidade &nbsp; | &nbsp; Termos de Uso &nbsp; | &nbsp; Desenvolvido para uma saúde melhor</span></div></footer>
    <a className="floating-wa" href={wa} target="_blank" rel="noreferrer"><Phone/></a>
  </div>;
}
