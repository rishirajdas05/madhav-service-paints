import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const WHATSAPP = "919576698008";
const PHONE = "+91 95766 98008";
const EMAIL = "fastservicepaint@gmail.com";
const INSTAGRAM =
  "https://www.instagram.com/madhav.servicepaint/?__pwa=1#";

/* =========================================================
   ICONS
========================================================= */

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 5.18 2 2 0 0 1 4.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 10.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.65 7.4L4 20l1.15-3.7A8.5 8.5 0 1 1 20.5 11.5Z" />
        <path d="M8.7 8.5c.2-.45.42-.46.78-.46h.55c.17 0 .35.06.44.3l.68 1.65c.08.2.05.36-.08.52l-.5.6c-.13.15-.17.28-.06.47.25.44.67 1 1.18 1.48.52.48 1.12.9 1.58 1.12.2.1.32.08.45-.07l.58-.7c.14-.17.29-.2.5-.11l1.57.75c.22.1.35.16.4.28.05.12.05.68-.16 1.05-.2.37-.76.7-1.17.75-.38.05-.86.07-1.39-.1-.32-.1-.74-.24-1.27-.49-.54-.25-1.05-.55-1.54-.91-.5-.36-.96-.77-1.36-1.21-.4-.44-.75-.9-1.02-1.36-.28-.47-.48-.94-.58-1.36-.1-.42-.1-.8-.04-1.13.06-.34.21-.63.36-.96Z" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (name === "home") {
    return (
      <svg {...common}>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    );
  }

  if (name === "paint") {
    return (
      <svg {...common}>
        <path d="M4 5h12a2 2 0 0 1 2 2v3H4V5Z" />
        <path d="M8 10v8" />
        <path d="M6 18h4" />
        <path d="M18 8h2a1 1 0 0 1 1 1v2h-3" />
      </svg>
    );
  }

  if (name === "menu") {
    return (
      <svg {...common}>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg {...common}>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </svg>
    );
  }

  if (name === "plus") {
    return (
      <svg {...common}>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    );
  }

  return null;
}

/* =========================================================
   REAL PROJECT IMAGES
========================================================= */

const projects = [
  {
    title: "Premium Wooden Entrance",
    category: "interior",
    categoryName: "Door & Wood Finish",
    image: "/images/door.jpg",
  },
  {
    title: "Decorative Feature Wall",
    category: "painting",
    categoryName: "Wall Painting",
    image: "/images/framed-wall.jpg",
  },
  {
    title: "Modern Panel Wall",
    category: "interior",
    categoryName: "Interior Finishing",
    image: "/images/panel-wall.jpg",
  },
  {
    title: "Designer TV Wall",
    category: "painting",
    categoryName: "Designer Wall",
    image: "/images/tv-wall.jpg",
  },
  {
    title: "Marble Finish Wall",
    category: "painting",
    categoryName: "Texture & Finish",
    image: "/images/marble-wall.jpg",
  },
  {
    title: "Residential Exterior",
    category: "exterior",
    categoryName: "Exterior Painting",
    image: "/images/exterior.jpg",
  },
  {
    title: "Ceiling & Lighting Finish",
    category: "interior",
    categoryName: "Ceiling Design",
    image: "/images/ceiling.jpg",
  },
  {
    title: "Professional Wall Finish",
    category: "painting",
    categoryName: "Painting",
    image: "/images/painted-wall.jpg",
  },
];

/* =========================================================
   HERO SLIDER
   Uses only actual Madhav Service Paints project images.
========================================================= */

const heroImages = [
  "/images/exterior.jpg",
  "/images/door.jpg",
  "/images/panel-wall.jpg",
  "/images/tv-wall.jpg",
  "/images/marble-wall.jpg",
  "/images/ceiling.jpg",
  "/images/framed-wall.jpg",
  "/images/painted-wall.jpg",
];

/* =========================================================
   INSTAGRAM
========================================================= */

const instagramImages = [
  "/images/exterior.jpg",
  "/images/door.jpg",
  "/images/marble-wall.jpg",
  "/images/panel-wall.jpg",
  "/images/framed-wall.jpg",
  "/images/tv-wall.jpg",
  "/images/ceiling.jpg",
  "/images/painted-wall.jpg",
];

/* =========================================================
   INDIAN HOME INSPIRATION
========================================================= */

const indianReferenceImages = [
  {
    title: "Modern Indian Living Room",
    text: "Warm living room styling with a TV unit, marble-look finish and pooja space.",
    image:
      "https://images.unsplash.com/photo-1734937743443-a50fff0c0b40?auto=format&fit=crop&q=85&w=1600",
  },
  {
    title: "Indian Home Interior",
    text: "Contemporary residential styling suited to modern Indian homes.",
    image:
      "https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?auto=format&fit=crop&q=85&w=1600",
  },
  {
    title: "Modern Indian Bedroom",
    text: "A practical bedroom concept with warm finishes and modern storage.",
    image:
      "https://images.unsplash.com/photo-1771327811795-6197403af846?auto=format&fit=crop&q=85&w=1600",
  },
  {
    title: "Indian Residential Exterior",
    text: "Contemporary residential exterior inspiration for Indian homes.",
    image:
      "https://images.unsplash.com/photo-1771909713228-d1857f65b034?auto=format&fit=crop&q=85&w=1600",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    icon: "paint",
    title: "Interior Painting",
    text: "Premium wall painting, colour consultation and smooth finishing for beautiful interiors.",
  },
  {
    number: "02",
    icon: "home",
    title: "Exterior Painting",
    text: "Durable exterior painting designed to protect and improve the look of your home.",
  },
  {
    number: "03",
    icon: "paint",
    title: "Texture & Designer Walls",
    text: "Decorative textures, feature walls and premium finishes for distinctive spaces.",
  },
  {
    number: "04",
    icon: "home",
    title: "Wood & Door Finishing",
    text: "Professional finishing for doors, wooden surfaces and entrance areas.",
  },
  {
    number: "05",
    icon: "paint",
    title: "Ceiling Design",
    text: "Clean ceiling finishes and decorative treatments that complement your interiors.",
  },
  {
    number: "06",
    icon: "home",
    title: "Complete Home Makeover",
    text: "A complete painting and finishing solution for new homes and renovations.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  /* =======================================================
     NEW: HERO SLIDER STATE
  ======================================================= */

  const [heroIndex, setHeroIndex] = useState(0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    details: "",
  });

  /* =======================================================
     NEW: AUTOMATIC HERO SLIDER
     
     Changes image every 5 seconds.
  ======================================================= */

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setHeroIndex((previous) => (previous + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(sliderTimer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightbox(null);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `Hello Madhav Service Paints!

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}

Project Details:
${form.details || "I would like to discuss my project with you."}

Thank you.`;

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* ===================================================
          NAVBAR
      =================================================== */}

      <header className="navbar">
        <div className="container nav-inner">
          <a
            href="#home"
            className="brand"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/logo.png" alt="Madhav Service Paints" />

            <div className="brand-text">
              <strong>MADHAV</strong>
              <span>SERVICE PAINTS</span>
            </div>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>

            <a href="#inspiration" onClick={() => setMenuOpen(false)}>
              Inspiration
            </a>

            <a href="#instagram" onClick={() => setMenuOpen(false)}>
              Instagram
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>

          <a className="nav-quote" href="#contact">
            Get a Quote
            <Icon name="arrow" size={16} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation"
          >
            <Icon name={menuOpen ? "close" : "menu"} size={25} />
          </button>
        </div>
      </header>

      <main>
        {/* ===================================================
            HERO WITH AUTOMATIC SLIDER
        =================================================== */}

        <section className="hero" id="home">
          <div className="hero-slider">
            {heroImages.map((image, index) => (
              <div
                className={`hero-slide ${
                  index === heroIndex ? "active" : ""
                }`}
                key={image}
              >
                <img
                  src={image}
                  alt={`Madhav Service Paints project ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="hero-overlay" />

          <div className="container hero-content">
            <p className="eyebrow light">
              PAINT • FINISH • TRANSFORM
            </p>

            <h1>
              Beautiful Homes,
              <br />
              <em>Beautifully Finished.</em>
            </h1>

            <p className="hero-description">
              Professional painting, texture finishes and
              interior-exterior solutions for modern Indian homes.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button button-gold">
                Start Your Project
                <Icon name="arrow" size={17} />
              </a>

              <a href="#gallery" className="button button-outline">
                Explore Our Work
              </a>
            </div>
          </div>

          {/* Slider controls */}
          <div className="hero-slider-controls">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={index === heroIndex ? "active" : ""}
                onClick={() => setHeroIndex(index)}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="hero-bottom container">
            <span>
              {String(heroIndex + 1).padStart(2, "0")}
            </span>

            <div className="hero-line" />

            <span>
              {String(heroImages.length).padStart(2, "0")} PROJECTS
            </span>
          </div>
        </section>

        {/* ===================================================
            STATS
        =================================================== */}

        <section className="stats">
          <div className="container stats-grid">
            <div className="stat">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>

            <div className="stat">
              <strong>500+</strong>
              <span>Homes Transformed</span>
            </div>

            <div className="stat">
              <strong>100%</strong>
              <span>Quality Focus</span>
            </div>

            <div className="stat">
              <strong>6</strong>
              <span>Core Services</span>
            </div>
          </div>
        </section>

        {/* ===================================================
            ABOUT
        =================================================== */}

        <section className="section about" id="about">
          <div className="container">
            <div className="section-heading about-heading">
              <div>
                <p className="eyebrow">
                  ABOUT MADHAV SERVICE PAINTS
                </p>

                <h2>
                  Crafting Spaces
                  <br />
                  <em>People Love.</em>
                </h2>
              </div>

              <p className="heading-description">
                We believe a good finish can completely change how
                a home feels. Our focus is simple — quality
                workmanship, thoughtful colour choices and clean
                finishing.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-main-image">
                <img
                  src="/images/panel-wall.jpg"
                  alt="Interior wall finishing"
                  loading="lazy"
                />

                <div className="image-label">
                  <span>01</span>
                  <p>INTERIOR FINISHING</p>
                </div>
              </div>

              <div className="about-side">
                <div className="about-small-image">
                  <img
                    src="/images/door.jpg"
                    alt="Wooden entrance finish"
                    loading="lazy"
                  />
                </div>

                <div className="about-copy">
                  <p>
                    From a fresh coat of paint to a complete interior
                    transformation, Madhav Service Paints brings
                    practical design and professional finishing
                    together.
                  </p>

                  <div className="check-list">
                    <div>
                      <span>
                        <Icon name="check" size={16} />
                      </span>
                      <p>Clean & professional workmanship</p>
                    </div>

                    <div>
                      <span>
                        <Icon name="check" size={16} />
                      </span>
                      <p>Quality-focused finishing</p>
                    </div>

                    <div>
                      <span>
                        <Icon name="check" size={16} />
                      </span>
                      <p>Solutions for Indian homes</p>
                    </div>

                    <div>
                      <span>
                        <Icon name="check" size={16} />
                      </span>
                      <p>Personal project guidance</p>
                    </div>
                  </div>

                  <a href="#contact" className="text-link">
                    Discuss Your Home
                    <Icon name="arrow" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            SERVICES
        =================================================== */}

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">WHAT WE DO</p>

                <h2>
                  Complete Home
                  <br />
                  <em>Finishing Solutions.</em>
                </h2>
              </div>

              <p className="heading-description">
                From walls and ceilings to doors and exteriors, we
                provide practical finishing solutions under one
                roof.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article
                  className="service-card"
                  key={service.number}
                >
                  <div className="service-top">
                    <span className="service-number">
                      {service.number}
                    </span>

                    <span className="service-icon">
                      <Icon
                        name={service.icon}
                        size={24}
                      />
                    </span>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <a href="#contact" className="service-link">
                    Enquire
                    <Icon name="arrow" size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            GALLERY
        =================================================== */}

        <section className="section gallery" id="gallery">
          <div className="container">
            <div className="section-heading gallery-heading">
              <div>
                <p className="eyebrow">OUR ACTUAL WORK</p>

                <h2>
                  Spaces We've
                  <br />
                  <em>Transformed.</em>
                </h2>
              </div>

              <p className="heading-description">
                A selection of actual Madhav Service Paints work
                across interiors, exteriors and decorative finishes.
              </p>
            </div>

            <div className="filter-bar">
              {[
                ["all", "All Projects"],
                ["interior", "Interior"],
                ["exterior", "Exterior"],
                ["painting", "Painting"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  className={filter === value ? "active" : ""}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="gallery-grid">
              {filteredProjects.map((project, index) => (
                <article
                  className={`project-card project-${index % 4}`}
                  key={project.image}
                  onClick={() => setLightbox(project)}
                >
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />

                    <div className="project-overlay">
                      <span>{project.categoryName}</span>

                      <div className="project-title-row">
                        <h3>{project.title}</h3>

                        <button
                          className="project-plus"
                          aria-label={`View ${project.title}`}
                          onClick={(event) => {
                            event.stopPropagation();
                            setLightbox(project);
                          }}
                        >
                          <Icon name="plus" size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            PROCESS
        =================================================== */}

        <section className="section process">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">OUR PROCESS</p>

                <h2>
                  Simple From
                  <br />
                  <em>Start to Finish.</em>
                </h2>
              </div>

              <p className="heading-description">
                We keep the process transparent and straightforward,
                so you always know what happens next.
              </p>
            </div>

            <div className="process-grid">
              <div className="process-item">
                <span>01</span>

                <div>
                  <h3>Discuss</h3>
                  <p>
                    Tell us about your home, requirements, colours
                    and ideas.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>02</span>

                <div>
                  <h3>Plan</h3>
                  <p>
                    We understand the space and recommend suitable
                    finishes.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>03</span>

                <div>
                  <h3>Execute</h3>
                  <p>
                    Our team carries out the work with attention
                    to detail.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>04</span>

                <div>
                  <h3>Finish</h3>
                  <p>
                    Final inspection and finishing touches before
                    completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            INDIAN HOME INSPIRATION
        =================================================== */}

        <section
          className="section inspiration"
          id="inspiration"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">DESIGN INSPIRATION</p>

                <h2>
                  Indian Homes,
                  <br />
                  <em>Modern Living.</em>
                </h2>
              </div>

              <p className="heading-description">
                Carefully selected references for colours, finishes
                and interiors that work beautifully with modern
                Indian homes.
              </p>
            </div>

            <div className="inspiration-grid">
              {indianReferenceImages.map((item, index) => (
                <article
                  className="inspiration-card"
                  key={item.title}
                >
                  <div className="inspiration-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                    <span>
                      REFERENCE{" "}
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="inspiration-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="inspiration-note">
              <span>✦</span>

              <p>
                Reference images are for design inspiration only.
                They are not Madhav Service Paints client projects.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================
            INSTAGRAM
        =================================================== */}

        <section className="section instagram" id="instagram">
          <div className="container">
            <div className="instagram-header">
              <div>
                <p className="eyebrow">FOLLOW OUR WORK</p>

                <h2>
                  More Projects
                  <br />
                  <em>On Instagram.</em>
                </h2>
              </div>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="instagram-profile"
              >
                <span className="instagram-icon">
                  <Icon name="instagram" size={21} />
                </span>

                <strong>@madhav.servicepaint</strong>

                <Icon name="arrow" size={17} />
              </a>
            </div>

            <div className="instagram-grid">
              {instagramImages.map((image, index) => (
                <div
                  className="instagram-image"
                  key={index}
                >
                  <img
                    src={image}
                    alt={`Madhav Service Paints project ${
                      index + 1
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="instagram-bottom">
              <p>
                See our latest painting, finishing and home
                transformation work on Instagram.
              </p>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Visit Instagram
                <Icon name="arrow" size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================
            TESTIMONIAL
        =================================================== */}

        <section className="testimonial">
          <div className="container testimonial-inner">
            <div className="quote-mark">“</div>

            <div className="testimonial-content">
              <p className="eyebrow light">
                CLIENT EXPERIENCE
              </p>

              <blockquote>
                A beautiful finish is not just about paint. It is
                about making a space feel like home.
              </blockquote>

              <div className="testimonial-line" />

              <p className="testimonial-caption">
                MADHAV SERVICE PAINTS
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div className="contact-info">
              <p className="eyebrow">LET'S TALK</p>

              <h2>
                Ready to
                <br />
                <em>Transform Your Home?</em>
              </h2>

              <p className="contact-description">
                Tell us what you have in mind. Share your
                requirements and our team will get in touch with
                you.
              </p>

              <div className="contact-details">
                <a
                  href={`tel:${WHATSAPP}`}
                  className="contact-row"
                >
                  <span className="contact-icon">
                    <Icon name="phone" size={20} />
                  </span>

                  <div>
                    <small>CALL US</small>
                    <strong>{PHONE}</strong>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="contact-row"
                >
                  <span className="contact-icon">
                    <Icon name="mail" size={20} />
                  </span>

                  <div>
                    <small>EMAIL US</small>
                    <strong>{EMAIL}</strong>
                  </div>
                </a>

                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-row"
                >
                  <span className="contact-icon">
                    <Icon name="instagram" size={20} />
                  </span>

                  <div>
                    <small>INSTAGRAM</small>
                    <strong>@madhav.servicepaint</strong>
                  </div>
                </a>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-direct"
              >
                <span>
                  <Icon name="whatsapp" size={20} />
                </span>

                Chat with us on WhatsApp

                <Icon name="arrow" size={16} />
              </a>
            </div>

            <div className="contact-form-wrap">
              <div className="form-heading">
                <p className="eyebrow">GET A QUOTE</p>

                <h3>
                  Tell us about your project.
                </h3>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    <span>Your Name</span>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                      placeholder="Enter your name"
                      required
                    />
                  </label>

                  <label>
                    <span>Phone Number</span>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleFormChange}
                      placeholder="Enter your phone"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>Service Required</span>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Interior Painting">
                      Interior Painting
                    </option>

                    <option value="Exterior Painting">
                      Exterior Painting
                    </option>

                    <option value="Texture & Designer Walls">
                      Texture & Designer Walls
                    </option>

                    <option value="Wood & Door Finishing">
                      Wood & Door Finishing
                    </option>

                    <option value="Ceiling Design">
                      Ceiling Design
                    </option>

                    <option value="Complete Home Makeover">
                      Complete Home Makeover
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </label>

                <label>
                  <span>Project Details</span>

                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleFormChange}
                    placeholder="Tell us about your home, room size, preferred colours, location, etc."
                    rows="5"
                  />
                </label>

                <button
                  type="submit"
                  className="submit-button"
                >
                  Send Enquiry on WhatsApp
                  <Icon name="whatsapp" size={19} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <a
              href="#home"
              className="brand footer-logo"
            >
              <img
                src="/logo.png"
                alt="Madhav Service Paints"
              />

              <div className="brand-text">
                <strong>MADHAV</strong>
                <span>SERVICE PAINTS</span>
              </div>
            </a>

            <p>
              Professional painting and finishing solutions for
              beautiful Indian homes.
            </p>
          </div>

          <div className="footer-links">
            <h4>QUICK LINKS</h4>

            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <h4>CONNECT</h4>

            <a href={`tel:${WHATSAPP}`}>
              <Icon name="phone" size={15} />
              Phone
            </a>

            <a href={`mailto:${EMAIL}`}>
              <Icon name="mail" size={15} />
              Email
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="instagram" size={15} />
              Instagram
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} Madhav Service Paints.
            All rights reserved.
          </p>

          <p>Designed for modern homes.</p>
        </div>
      </footer>

      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <Icon name="whatsapp" size={24} />
      </a>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            <Icon name="close" size={25} />
          </button>

          <div
            className="lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
            />

            <div className="lightbox-caption">
              <p>{lightbox.categoryName}</p>
              <h3>{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);