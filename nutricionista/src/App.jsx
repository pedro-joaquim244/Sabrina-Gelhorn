import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowDown, ArrowUpRight, BookOpen, Brain, CheckCircle2, Compass, House,
  GraduationCap, HeartHandshake, Menu, MessageCircle, PencilRuler, Puzzle,
  Sparkles, UserRound, UsersRound, X,
} from 'lucide-react';
import { siteConfig } from './config';
import logo from './assets/logo.png';
import heroPhoto from './assets/psicologa1.png';
import aboutPhoto from './assets/Psicologa2.png';
import educationPhoto from './assets/Psicologa3.png';
import complementaryPhoto from './assets/psicologa4.png';
import './redesign.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const specialties = [
  { icon: Brain, title: 'Psicologia clínica', text: 'Escuta profissional voltada à compreensão de vivências, emoções e relações.' },
  { icon: BookOpen, title: 'Psicopedagogia', text: 'Um olhar integrado para os processos de aprendizagem e desenvolvimento.' },
  { icon: Puzzle, title: 'Dificuldades de aprendizagem', text: 'Investigação cuidadosa dos desafios que atravessam o aprender.' },
  { icon: UserRound, title: 'Psicologia infantil', text: 'Acolhimento às necessidades emocionais e relacionais da infância.' },
  { icon: Compass, title: 'Orientação vocacional', text: 'Reflexão sobre interesses, escolhas e possibilidades de trajetória.' },
  { icon: House, title: 'Orientação familiar', text: 'Apoio à compreensão de vínculos, dinâmicas e desafios familiares.' },
  { icon: PencilRuler, title: 'Avaliação psicopedagógica', text: 'Leitura contextualizada de aspectos envolvidos na aprendizagem.' },
  { icon: UsersRound, title: 'Constelação familiar', text: 'Conhecimento complementar presente em sua trajetória formativa.' },
  { icon: Sparkles, title: 'Hipnose sistêmica', text: 'Recurso de formação sistêmica que compõe seu repertório profissional.' },
];

const education = [
  { year: '1982', title: 'Graduação em Pedagogia', detail: 'Início de uma trajetória dedicada à educação e ao desenvolvimento humano.' },
  { year: '2006', title: 'Pós-graduação em Pedagogia Terapêutica', detail: 'Universidade Tuiuti.' },
  { year: '2012', title: 'Graduação em Psicologia', detail: 'Universidade Tuiuti.' },
];

const complementaryEducation = [
  'Terapia Familiar Sistêmica', 'Ciências da Educação', 'Pós-graduação em Pedagogia Terapêutica', 'Constelações Familiares',
  'Hipnose Sistêmica', 'Desenho Sistêmico',
];

const educationConnections = [
  { icon: BookOpen, label: 'BASE EDUCACIONAL', title: 'Educação e aprendizagem', text: 'Pedagogia e Pedagogia Terapêutica ampliam a compreensão dos processos de aprender e se desenvolver.' },
  { icon: Brain, label: 'FORMAÇÃO EM PSICOLOGIA', title: 'Psicologia e desenvolvimento humano', text: 'A formação em Psicologia aproxima aspectos emocionais, relacionais e contextuais de cada história.' },
  { icon: UsersRound, label: 'REPERTÓRIO SISTÊMICO', title: 'Relações e vínculos', text: 'Terapia Familiar Sistêmica e formações complementares aprofundam o olhar para vínculos e contextos.' },
];

function Brand({ inverse = false }) {
  return (
    <a className={`brand ${inverse ? 'brand--inverse' : ''}`} href="#inicio" aria-label="Sabrina Gelhorn — início">
      <img className="brand__logo" src={logo} alt="Sabrina Gelhorn — Psicóloga e Psicopedagoga, CRP 08/17950" width="2172" height="724" />
    </a>
  );
}

function Eyebrow({ children, light = false }) {
  return <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{children}</span>;
}

function Portrait() {
  return (
    <figure className="portrait portrait--photo">
      <img src={heroPhoto} alt="Retrato profissional de Sabrina Gelhorn usando blazer escuro" width="1254" height="1254" fetchPriority="high" />
      <div className="portrait__caption"><span>Curitiba · Paraná</span><strong>CRP 08/17950</strong></div>
    </figure>
  );
}

export default function App() {
  const root = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen);
    return () => document.body.classList.remove('menu-is-open');
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .from('.site-header', { y: -24, opacity: 0, duration: 0.55 })
        .from('.hero__eyebrow', { y: 16, opacity: 0, duration: 0.45 }, '-=0.15')
        .from('.hero__title-line > span', { yPercent: 112, duration: 0.86, stagger: 0.1 }, '-=0.16')
        .from('.hero__lead, .hero__actions, .hero__details', { y: 20, opacity: 0, duration: 0.58, stagger: 0.1 }, '-=0.5')
        .from('.hero__visual', { y: 34, opacity: 0, scale: 0.98, duration: 0.9 }, '-=0.72');

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.from(element, { y: 36, opacity: 0, duration: 0.75, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
      });
      gsap.utils.toArray('[data-stagger]').forEach((group) => {
        gsap.from(group.children, { y: 28, opacity: 0, duration: 0.65, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: group, start: 'top 84%', once: true } });
      });
      gsap.to('.portrait img', { yPercent: 4, scale: 1.025, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.7 } });
      gsap.utils.toArray('.about__portrait img, .perspective__photo img').forEach((image) => {
        gsap.fromTo(image, { yPercent: -3, scale: 1.035 }, { yPercent: 3, scale: 1.035, ease: 'none', scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: 0.7 } });
      });
      gsap.to('.scroll-progress', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.1 } });
    });
    return () => media.revert();
  }, { scope: root });

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={root}>
      <div className="scroll-progress" aria-hidden="true" />
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container site-header__inner">
          <Brand />
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav id="main-navigation" className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Navegação principal">
            <a href="#inicio" onClick={closeMenu}>Início</a><a href="#sobre" onClick={closeMenu}>Sobre</a><a href="#especialidades" onClick={closeMenu}>Especialidades</a><a href="#formacao" onClick={closeMenu}>Formação</a><a href="#contato" onClick={closeMenu}>Contato</a>
            <a className="button button--header" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Agendar conversa <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__wash" aria-hidden="true" />
          <div className="container hero__grid">
            <div className="hero__copy">
              <Eyebrow><span className="hero__eyebrow">PSICOLOGIA · PSICOPEDAGOGIA · CURITIBA</span></Eyebrow>
              <h1><span className="hero__title-line"><span>Um espaço de</span></span><span className="hero__title-line"><span>acolhimento, escuta</span></span><span className="hero__title-line"><span>e <em>desenvolvimento.</em></span></span></h1>
              <p className="hero__lead">Conheça o trabalho de Sabrina Gelhorn, psicóloga e psicopedagoga em Curitiba.</p>
              <div className="hero__actions">
                <a className="button button--primary" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Entre em contato <ArrowUpRight size={17} /></a>
                <a className="button button--text" href="#sobre">Conheça sua trajetória <ArrowDown size={16} /></a>
              </div>
              <div className="hero__details" aria-label="Informações profissionais"><span><strong>CRP</strong> 08/17950</span><span><strong>Atuação</strong> Curitiba — PR</span></div>
            </div>
            <div className="hero__visual">
              <Portrait />
              <div className="hero__note"><span className="hero__note-icon"><HeartHandshake size={19} /></span><div><small>TRAJETÓRIA</small><strong>Mais de 45 anos no campo educacional e áreas relacionadas</strong></div></div>
              <span className="hero__seal" aria-hidden="true"><i>ESCUTA</i><i>·</i><i>CUIDADO</i></span>
            </div>
          </div>
          <a className="hero__scroll" href="#sobre" aria-label="Ir para a seção sobre Sabrina"><span>CONHEÇA SABRINA</span><ArrowDown size={14} /></a>
        </section>

        <section className="intro-strip" aria-label="Princípios do trabalho"><div className="container intro-strip__inner" data-stagger><span><i>01</i> Escuta qualificada</span><span><i>02</i> Olhar sistêmico</span><span><i>03</i> Educação e desenvolvimento</span></div></section>

        <section className="about section" id="sobre">
          <div className="container about__grid">
            <figure className="about__portrait" data-reveal>
              <img src={aboutPhoto} alt="Sabrina Gelhorn em retrato profissional, usando camisa verde" width="1196" height="1315" loading="lazy" />
              <figcaption><span>Psicóloga e Psicopedagoga</span><strong>Sabrina Gelhorn</strong></figcaption>
            </figure>
            <div className="about__story">
              <div className="about__heading" data-reveal><Eyebrow>SOBRE SABRINA</Eyebrow><h2>Uma trajetória guiada pelo <em>cuidado com pessoas.</em></h2></div>
              <div className="about__content" data-reveal>
                <p className="about__lead">Sabrina Jany Gelhorn é psicóloga e psicopedagoga, com uma trajetória profissional construída entre educação, desenvolvimento humano e conhecimentos de abordagem sistêmica.</p>
                <div className="about__columns"><p>São mais de 45 anos de atuação no campo educacional e em áreas relacionadas — uma experiência que amplia seu olhar para os processos de aprendizagem, relações familiares e singularidades de cada pessoa.</p><p>Sua formação reúne Psicologia, Pedagogia e Psicopedagogia, além de estudos complementares que dialogam com a compreensão dos vínculos e dos contextos em que cada história acontece.</p></div>
                <div className="experience-card"><strong>45<span>+</span></strong><p>anos de trajetória profissional na educação e em áreas relacionadas.</p><small>O período não se refere exclusivamente à prática clínica em Psicologia.</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="specialties section" id="especialidades">
          <div className="container">
            <div className="section-heading" data-reveal><div><Eyebrow>ÁREAS DE CONHECIMENTO E ATUAÇÃO</Eyebrow><h2>Um olhar que integra <em>pessoa, família e aprendizagem.</em></h2></div><p>Referências profissionais apresentadas para esta demonstração, sempre com uma comunicação clara e responsável.</p></div>
            <div className="specialties__grid" data-stagger>{specialties.map(({ icon: Icon, title, text }, index) => <article className="specialty-card" key={title}><div className="specialty-card__top"><span>0{index + 1}</span><Icon size={21} /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
            <p className="section-disclaimer" data-reveal><CheckCircle2 size={16} /> A disponibilidade atual de cada serviço deve ser confirmada diretamente com a profissional.</p>
          </div>
        </section>

        <section className="education section" id="formacao">
          <div className="container">
            <div className="trajectory-presentation">
              <figure className="trajectory-presentation__photo" data-reveal><img src={educationPhoto} alt="Retrato profissional de Sabrina Gelhorn" width="1103" height="1426" loading="lazy" /></figure>
              <div className="trajectory-presentation__copy" data-reveal>
                <Eyebrow>TRAJETÓRIA PROFISSIONAL</Eyebrow>
                <h2>Uma trajetória que conecta <em>diferentes perspectivas.</em></h2>
                <p>Sabrina reúne uma base multidisciplinar construída entre educação, Psicologia e abordagens sistêmicas, ampliando a compreensão sobre aprendizagem, desenvolvimento humano e relações.</p>
                <dl className="trajectory-presentation__meta">
                  <div><dt>Trajetória</dt><dd>Mais de 45 anos no campo educacional e áreas relacionadas</dd></div>
                  <div><dt>Atuação</dt><dd>Psicóloga e Psicopedagoga</dd></div>
                  <div><dt>Registro</dt><dd>CRP 08/17950</dd></div>
                </dl>
              </div>
            </div>

            <div className="trajectory-formation">
              <div className="trajectory-formation__heading" data-reveal><Eyebrow>FORMAÇÃO ACADÊMICA</Eyebrow><h3>Marcos de uma formação contínua</h3></div>
              <div className="trajectory-timeline" data-stagger>{education.map((item) => <article className="trajectory-timeline__item" key={item.year}><span className="trajectory-timeline__dot" /><strong>{item.year}</strong><h4>{item.title}</h4><p>{item.detail}</p></article>)}</div>
            </div>

            <div className="education-focus" data-stagger>
              {educationConnections.map(({ icon: Icon, label, title, text }) => <article className="education-focus__card" key={title}><span className="education-focus__icon"><Icon size={21} /></span><div><small>{label}</small><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>

            <div className="education-complementary">
              <div className="education-complementary__heading" data-reveal><span><GraduationCap size={21} /></span><div><small>FORMAÇÃO CONTINUADA</small><h3>Conhecimentos complementares</h3><p>Estudos que ampliam seu repertório sistêmico, educacional e relacional.</p></div></div>
              <div className="education-complementary__grid" data-stagger>{complementaryEducation.map((item, index) => <article key={item}><span>0{index + 1}</span><strong>{item}</strong></article>)}</div>
            </div>
          </div>
        </section>

        <section className="perspective"><div className="container perspective__grid"><figure className="perspective__photo" data-reveal><img src={complementaryPhoto} alt="Sabrina Gelhorn em seu ambiente profissional, usando blazer branco" width="1254" height="1254" loading="lazy" /><figcaption>Presença, experiência e escuta</figcaption></figure><div className="perspective__copy" data-reveal><Eyebrow light>UM OLHAR PARA O TODO</Eyebrow><blockquote>“Cada história pede tempo, presença e um olhar atento para aquilo que a torna única.”</blockquote><p>Uma mensagem editorial que traduz a proposta de acolhimento desta apresentação, sem atribuir uma citação literal à profissional.</p></div></div></section>

        <section className="contact section" id="contato"><div className="container contact__panel" data-reveal><div className="contact__copy"><Eyebrow light>CONTATO</Eyebrow><h2>O primeiro passo pode ser uma <em>conversa.</em></h2><p>Entre em contato para confirmar informações sobre disponibilidade, serviços e formas de atendimento.</p></div><div className="contact__details"><a className="contact__whatsapp" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer"><span><MessageCircle size={22} /></span><div><small>WHATSAPP</small><strong>(41) 98804-9908</strong></div><ArrowUpRight size={18} /></a><dl><div><dt>Localização</dt><dd>Curitiba — PR</dd></div><div><dt>Registro</dt><dd>CRP 08/17950</dd></div></dl></div></div></section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__top">
          <Brand inverse />
          <div className="site-footer__nav"><strong>Navegação</strong><a href="#sobre">Sobre</a><a href="#especialidades">Especialidades</a><a href="#formacao">Formação</a><a href="#contato">Contato</a></div>
          <div className="site-footer__info"><strong>Informações</strong><span>Psicóloga e Psicopedagoga</span><span>Curitiba — Paraná</span><span>CRP 08/17950</span></div>
          <div className="site-footer__contact"><strong>Fale com Sabrina</strong><p>Confirme disponibilidade, serviços e formas de atendimento.</p><a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Iniciar conversa <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="container site-footer__bottom"><span>© {new Date().getFullYear()} Sabrina Gelhorn.</span><span>Prévia demonstrativa · Informações de atendimento sujeitas à confirmação.</span></div>
      </footer>
      <a className="floating-whatsapp" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com Sabrina pelo WhatsApp"><MessageCircle size={19} /><span>Fale pelo WhatsApp</span></a>
    </div>
  );
}
