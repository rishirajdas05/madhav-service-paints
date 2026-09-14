import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const WHATSAPP = '919576698008';
const EMAIL = 'fastservicepaint@gmail.com';

const projects = [
  { id: 1, title: 'Feature Wall & Paneling', category: 'Interior', image: '/images/panel-wall.jpg', size: 'large' },
  { id: 2, title: 'Custom Framed Wall', category: 'Wall Art', image: '/images/framed-wall.jpg', size: 'wide' },
  { id: 3, title: 'Statement TV Wall', category: 'Interior', image: '/images/tv-wall.jpg', size: 'tall' },
  { id: 4, title: 'Textured Marble Finish', category: 'Painting', image: '/images/marble-wall.jpg', size: 'small' },
  { id: 5, title: 'Residential Exterior', category: 'Exterior', image: '/images/exterior.jpg', size: 'small' },
  { id: 6, title: 'Designer Ceiling', category: 'Interior', image: '/images/ceiling.jpg', size: 'wide' },
  { id: 7, title: 'Wooden Main Door Finish', category: 'Painting', image: '/images/door.jpg', size: 'small' },
  { id: 8, title: 'Warm Indian Living Room', category: 'Interior', image: 'https://images.unsplash.com/photo-1665808735329-31c19582323d?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400', size: 'large' },
  { id: 9, title: 'Decorative Wall Finish', category: 'Painting', image: '/images/painted-wall.jpg', size: 'tall' }
];

const services = [
  ['01', 'Interior Design', 'False ceiling, wall paneling, TV units, living rooms, bedrooms and complete home interiors.'],
  ['02', 'Exterior Design', 'House elevations, exterior colour planning, façade finishes and modern residential makeovers.'],
  ['03', 'Painting & Wall Art', 'Premium paint finishes, textures, decorative walls, murals and artistic detailing.'],
  ['04', 'Renovation', 'Refresh existing spaces with coordinated colours, finishes, lighting and design upgrades.']
];

function App() {
  const [filter, setFilter] = useState('All');
  const [menu, setMenu] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const whatsapp = (text = 'Hello Madhav Service Paints, I would like to discuss a project.') => {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const submit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const phone = form.get('phone');
    const type = form.get('type');
    const details = form.get('details');
    whatsapp(`Hello Madhav Service Paints!%0A%0AName: ${name}%0APhone: ${phone}%0AProject: ${type}%0ADetails: ${details}`);
  };

  return (
    <>
      <header className="header">
        <a className="logo" href="#home" onClick={() => setMenu(false)}>
          <img src="/logo.png" alt="Madhav Service Paints" />
          <span><b>MADHAV SERVICE PAINTS</b><small>INTERIOR • EXTERIOR • DESIGNER & PAINTING</small></span>
        </a>
        <button className="menuBtn" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">☰</button>
        <nav className={menu ? 'open' : ''}>
          {['Home','About','Services','Projects','Process','Contact'].map(x => <a key={x} href={'#'+x.toLowerCase()} onClick={() => setMenu(false)}>{x}</a>)}
          <button className="navButton" onClick={() => whatsapp()}>Get a Quote ↗</button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroImage" />
          <div className="heroShade" />
          <div className="heroContent">
            <div className="eyebrow">INTERIOR • EXTERIOR • PAINTING</div>
            <h1>Spaces that feel<br /><i>beautifully yours.</i></h1>
            <p>Designing, painting and transforming homes with care, detail and Indian warmth.</p>
            <div className="heroActions">
              <a className="goldBtn" href="#projects">Explore Our Work</a>
              <button className="lineBtn" onClick={() => whatsapp()}>WhatsApp Us ↗</button>
            </div>
          </div>
          <div className="heroBadge"><span>Since</span><strong>2019</strong><small>Design • Create • Inspire</small></div>
          <div className="heroBottom">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="trustbar">
          <div><strong>50+</strong><span>Projects</span></div>
          <div><strong>30+</strong><span>Happy Clients</span></div>
          <div><strong>100%</strong><span>Care & Detail</span></div>
          <div><strong>5+</strong><span>Years Experience</span></div>
        </section>

        <section id="about" className="section about">
          <div className="split">
            <div className="imageStack">
              <img className="stackMain" src="/images/framed-wall.jpg" alt="Madhav Service Paints interior work" />
              <img className="stackSmall" src="/images/door.jpg" alt="Custom wooden door finish" />
              <span className="stamp">MADHAV<br />SERVICE<br />PAINTS</span>
            </div>
            <div className="copy">
              <div className="eyebrow">ABOUT THE STUDIO</div>
              <h2>Crafting spaces with <i>Indian warmth.</i></h2>
              <p>Led by <b>Adtiya Kumar</b>, Madhav Service Paints brings together interior design, exterior finishing, professional painting and decorative wall work under one roof.</p>
              <p>From a single feature wall to a complete home makeover, every project is planned around your space, taste and budget.</p>
              <div className="ownerCard"><div className="ownerInitial">AK</div><div><b>Adtiya Kumar</b><span>Owner & Designer</span></div></div>
              <a className="textLink" href={`mailto:${EMAIL}`}>fastservicepaint@gmail.com →</a>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="sectionHead"><div><div className="eyebrow">WHAT WE DO</div><h2>One team. <i>Every finish.</i></h2></div><p>Thoughtful design and dependable execution for homes and commercial spaces.</p></div>
          <div className="serviceGrid">{services.map(([n,t,d]) => <article className="service" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><button onClick={() => whatsapp(`Hello Madhav Service Paints, I am interested in ${t}.`)}>Discuss this service ↗</button></article>)}</div>
        </section>

        <section id="projects" className="section portfolio">
          <div className="sectionHead"><div><div className="eyebrow">SELECTED WORK</div><h2>Made for real <i>homes.</i></h2></div><p>Actual project photos from Madhav Service Paints, curated and lightly enhanced for a cleaner portfolio presentation.</p></div>
          <div className="filters">{['All','Interior','Exterior','Painting','Wall Art'].map(f => <button key={f} className={filter===f?'active':''} onClick={() => setFilter(f)}>{f}</button>)}</div>
          <div className="projectGrid">{visible.map(p => <button className={`projectCard ${p.size}`} key={p.id} onClick={() => setActiveProject(p)}><img src={p.image} alt={p.title} /><span><small>{p.category}</small><b>{p.title}</b></span></button>)}</div>
        </section>

        <section id="process" className="section process">
          <div className="sectionHead"><div><div className="eyebrow">OUR PROCESS</div><h2>From idea to <i>finish.</i></h2></div></div>
          <div className="processGrid"><div><b>01</b><h3>Understand</h3><p>We discuss your space, style, requirements and budget.</p></div><div><b>02</b><h3>Design</h3><p>We plan colours, finishes, layout and visual direction.</p></div><div><b>03</b><h3>Execute</h3><p>Our team brings the selected design and finish to life.</p></div><div><b>04</b><h3>Handover</h3><p>We check the final details and leave your space ready.</p></div></div>
        </section>

        <section className="quoteSection"><div className="eyebrow">A BETTER SPACE STARTS WITH A CONVERSATION</div><h2>Let's make your next space<br /><i>worth coming home to.</i></h2><button className="goldBtn" onClick={() => whatsapp()}>Start on WhatsApp ↗</button></section>

        <section id="contact" className="section contact">
          <div><div className="eyebrow">GET IN TOUCH</div><h2>Tell us what<br /><i>you're imagining.</i></h2><p>For enquiries, quotations and project discussions:</p><a className="contactLink" href={`tel:+919576698008`}>+91 95766 98008</a><a className="contactLink" href={`mailto:${EMAIL}`}>{EMAIL}</a><div className="contactBtns"><button className="goldBtn" onClick={() => whatsapp()}>WhatsApp</button><a className="outlineBtn" href={`mailto:${EMAIL}`}>Email Us</a></div></div>
          <form onSubmit={submit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Phone<input name="phone" required placeholder="+91" /></label><label>Project type<select name="type"><option>Interior Design</option><option>Exterior Design</option><option>Painting / Wall Art</option><option>Renovation</option></select></label><label>Tell us about the project<textarea name="details" rows="5" placeholder="What would you like us to work on?"></textarea></label><button className="goldBtn submit" type="submit">Send Enquiry ↗</button></form>
        </section>
      </main>

      <footer><div><img src="/logo.png" alt="Madhav Service Paints" /><div><b>Madhav Service Paints</b><span>Design • Create • Inspire</span></div></div><p>© 2026 Madhav Service Paints · Owner: Adtiya Kumar</p><div className="footerLinks"><a href={`mailto:${EMAIL}`}>Email</a><a href={`https://wa.me/${WHATSAPP}`}>WhatsApp</a></div></footer>
      <button className="floatingWA" onClick={() => whatsapp()} aria-label="WhatsApp">◔</button>

      {activeProject && <div className="modal" onClick={() => setActiveProject(null)}><div className="modalInner" onClick={e => e.stopPropagation()}><button className="close" onClick={() => setActiveProject(null)}>×</button><img src={activeProject.image} alt={activeProject.title} /><div><small>{activeProject.category}</small><h3>{activeProject.title}</h3></div></div></div>}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
