import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
} from "lucide-react";
import { site } from "@/data/site";
import { PracticeMap } from "@/components/practice-map";

export function HeroSection() {
  return (
    <section className="hero section-wrap" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="eyebrow-line" />
          {site.title}
        </span>
        <h1>
          Salud que se siente.
          <br />
          Armonía que <em>se ve.</em>
        </h1>
        <p className="hero-description">{site.introduction}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#sobre-mi">
            Conocer mi trayectoria <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a className="text-link" href="#areas">
            Explorar áreas <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-note">
          <span className="note-dot" />
          Atención profesional · Información en actualización
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <Image
            src="/images/_DSC9656.JPG"
            alt="Sebastián Benavente durante una atención odontológica"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 48vw"
            className="hero-image motion-reduce:animate-none"
          />
        </div>
        <div className="image-caption">
          <span>01 / 01</span>
          <span>Odontología con una mirada integral</span>
        </div>
        <a href="#sobre-mi" className="scroll-cue" aria-label="Desplazarse hacia abajo">
          <ArrowDown size={16} aria-hidden="true" />
        </a>
        <span className="hero-image-label">Atención odontológica</span>
      </div>
      <div className="hero-index" aria-hidden="true">
        SB <span>·</span> 2025
      </div>
    </section>
  );
}

export function IntroSection() {
  return (
    <section className="intro-section section-wrap" id="sobre-mi">
      <div className="section-heading">
        <span className="eyebrow">01 — Sobre mí</span>
        <span className="section-marker">Una práctica con propósito</span>
      </div>
      <div className="intro-grid">
        <h2>
          La confianza
          <br />
          también es parte
          <br />
          del <em>tratamiento.</em>
        </h2>
        <div className="intro-text">
          <p className="intro-lead">{site.about}</p>
          <p className="muted-copy">
            Un espacio para conocer su enfoque, formación y experiencia. Los
            antecedentes profesionales se incorporarán una vez confirmados por
            Sebastián Benavente.
          </p>
          <a className="text-link" href="#formacion">
            Ver formación y experiencia{" "}
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="intro-signature">
        <span className="signature-rule" />
        <span>Salud · Ciencia · Armonía</span>
      </div>
    </section>
  );
}

export function CredentialsSection() {
  return (
    <section className="credentials section-wrap" id="formacion">
      <div className="credentials-top">
        <div>
          <span className="eyebrow">02 — Formación</span>
          <h2>
            El conocimiento
            <br />
            <em>en constante evolución.</em>
          </h2>
        </div>
        <p>
          La formación y la actualización permanente son parte de una práctica
          responsable. Los antecedentes específicos se publicarán al ser
          confirmados.
        </p>
      </div>
      <div className="timeline">
        {site.education.map((item, index) => (
          <article className="timeline-item" key={item.label}>
            <span className="timeline-number">0{index + 1}</span>
            <div className="timeline-content">
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
            <span className="timeline-state">
              <span className="note-dot" /> Pendiente de confirmación
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="experience section-wrap" id="experiencia">
      <div className="experience-heading">
        <span className="eyebrow">03 — Experiencia</span>
        <h2>
          Trayectoria construida
          <br />
          <em>con dedicación.</em>
        </h2>
      </div>
      <div className="experience-list">
        {site.experience.map((item, index) => (
          <article className="experience-item" key={item.label}>
            <span className="experience-number">0{index + 1}</span>
            <div>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
            <span className="pending-tag">Por confirmar</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AreasSection() {
  return (
    <section className="areas-section" id="areas">
      <div className="areas-intro section-wrap">
        <div>
          <span className="eyebrow">04 — Áreas de atención</span>
          <h2>
            Una visión integral.
            <br />
            <em>Dos áreas, un propósito.</em>
          </h2>
        </div>
        <p>
          Cada atención comienza con una evaluación profesional. Las áreas y
          prestaciones indicadas son propuestas editoriales, sujetas a
          confirmación por el profesional.
        </p>
      </div>
      <div className="area-list">
        {site.areas.map((area) => (
          <article className="area-panel" key={area.number}>
            <div className="area-image-wrap">
              <Image
                src={area.image}
                alt={area.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                className="area-image"
              />
              <span className="area-image-index">{area.number} / 02</span>
            </div>
            <div className="area-copy">
              <span className="area-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p className="area-subtitle">{area.subtitle}</p>
              <p className="area-description">{area.description}</p>
              <ul>
                {area.items.map((item) => (
                  <li key={item}>
                    <span className="list-dash" />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="text-link" href="#contacto">
                Consultar por una evaluación{" "}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PhilosophySection() {
  const principles = [
    "Atención personalizada",
    "Diagnóstico integral",
    "Evidencia científica",
    "Naturalidad y bienestar",
  ];

  return (
    <section className="philosophy section-wrap" id="filosofia">
      <div className="philosophy-meta">
        <span className="eyebrow">05 — Filosofía de atención</span>
        <span className="philosophy-symbol" aria-hidden="true">
          ✳
        </span>
      </div>
      <div className="philosophy-content">
        <blockquote>“{site.philosophy}”</blockquote>
        <div className="principle-list">
          {principles.map((principle) => (
            <span key={principle}>
              <Check size={14} aria-hidden="true" />
              {principle}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="gallery-section section-wrap" id="casos">
      <div className="gallery-heading">
        <div>
          <span className="eyebrow">06 — Galería</span>
          <h2>
            La confianza se construye
            <br />
            <em>con transparencia.</em>
          </h2>
        </div>
        <p>Un espacio para conocer casos clínicos y resultados documentados.</p>
      </div>
      <div className="gallery-empty">
        <div className="gallery-empty-mark" aria-hidden="true">
          SB
        </div>
        <span className="eyebrow">Un espacio reservado</span>
        <p>
          Aún no hay casos clínicos publicados.
        </p>
        <span className="gallery-caption">Galería clínica</span>
      </div>
    </section>
  );
}

export function ContactSection() {
  const whatsappUrl = `https://wa.me/${site.phone.replace(/\D/g, "")}`;

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-inner section-wrap">
        <div className="contact-copy">
          <span className="eyebrow">07 — Contacto</span>
          <h2>
            Conversemos
            <br />
            <em>sobre tu bienestar.</em>
          </h2>
          <p>
            Para solicitar una evaluación o conocer más sobre las áreas de
            atención, puedes contactarme directamente por WhatsApp o correo.
          </p>
          <a
            className="button button-light"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-details">
          <div className="contact-detail">
            <span className="contact-label">Ubicación</span>
            <span className="contact-value">
              <MapPin size={16} aria-hidden="true" />
              {site.location}
            </span>
          </div>
          <div className="contact-detail">
            <span className="contact-label">Correo electrónico</span>
            <a className="contact-value" href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-detail">
            <span className="contact-label">Teléfono / WhatsApp</span>
            <a
              className="contact-value"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.phone}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <PracticeMap />
        </div>
      </div>
      <div className="contact-form-note section-wrap" id="contacto-form">
        <div>
          <span className="eyebrow">Solicitar una evaluación</span>
          <p>
            Escribe por WhatsApp o correo. Por privacidad, evita enviar
            antecedentes clínicos o información sensible.
          </p>
        </div>
        <span className="form-status">
          <span className="note-dot" />
          Contacto disponible
        </span>
      </div>
    </section>
  );
}
