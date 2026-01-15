import zamorLogo from "./Images/logo ZAMOR CAPSnoBG.png";
import zamorLogodf from "./Images/logo ZAMOR CAPS.jpg";
import igIcon from "./Images/instagram.png";
import ttIcon from "./Images/tik-tok.png";
import waIcon from "./Images/whatsapp.png";
import estilosGorras from "./Images/estilosGorras.png";
import gorraMain from "./Images/gorraMain.png";


import "./App.css";

import { useRef } from "react";

function CatalogSlider({ items }) {
  const trackRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;

    // Mueve aprox 2 cards por click (ajusta si quieres)
    const card = el.querySelector(".catalog-card");
    const cardW = card ? card.getBoundingClientRect().width : 260;
    const gap = 18;
    el.scrollBy({ left: dir * (cardW * 2 + gap * 2), behavior: "smooth" });
  };

  return (
    <div className="catalog-slider">
      <button
        className="catalog-arrow left"
        onClick={() => scrollByCards(-1)}
        aria-label="Anterior"
      >
        ‹
      </button>

      <div className="catalog-track" ref={trackRef}>
        {items.map((it, idx) => (
          <article className="catalog-card" key={idx}>
            <div className="catalog-img">
              <img src={it.img} alt={`Producto ${idx + 1}`} />
            </div>

            <div className="catalog-meta">
              <div><strong>Talla:</strong> {it.talla}</div>
              <div><strong>Tipo:</strong> {it.tipo}</div>
            </div>
          </article>
        ))}
      </div>

      <button
        className="catalog-arrow right"
        onClick={() => scrollByCards(1)}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
}


function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">

          <nav>
            <ul className="nav-menu">
              <li>
  <a href="#inicio" className="nav-home" aria-label="Inicio">
    <img src={zamorLogo} alt="Zamor Caps" className="nav-home-logo" />
  </a>
</li>

              <li className="dropdown">
                <a href="#catalogo">CATÁLOGO ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="#gorras">GORRAS</a></li>
                  <li><a href="#bolsos">BOLSOS</a></li>
                </ul>
              </li>

              <li><a href="#recomendaciones">RECOMENDACIONES</a></li>
              <li><a href="#como-comprar">CÓMO COMPRAR</a></li>
              <li><a href="#contacto">CONTACTO</a></li>
            </ul>
          </nav>
        </div>
      </header>

{/* NUEVA PORTADA DE IMPACTO */}
<main id="inicio" className="hero-container">
  <div className="hero-content">
    <h1 className="hero-title">
      ESTILO <span className="text-danger">QUE QUEMA.</span><br />
      CALIDAD QUE PERDURA.
    </h1>
    <p className="hero-subtitle">Descubre la colección exclusiva de gorras con diseño premium hechas en Colombia.</p>
    <a href="#catalogo" className="btn-primary">VER CATÁLOGO</a>
  </div>
  
  <div className="hero-visual">
    {/* Aquí puedes usar la imagen de la gorra con llamas o el video 3D */}
    <img src={gorraMain} className="hero-product-img" alt="Gorra Red Flame" />
    <div className="hero-blob"></div> {/* Elemento decorativo sutil */}
  </div>
</main>

        {/* --------------SECCIONES------------ */}

{/* CATÁLOGO */}
<section id="catalogo" className="section">
  <h2>CATÁLOGO</h2>

  {/* GORRAS */}
  <h3 id="gorras" className="catalog-title">GORRAS</h3>
  <CatalogSlider
    items={[
      { img: zamorLogodf, talla: "--", tipo: "--" },
      { img: zamorLogodf, talla: "--", tipo: "--" },
      { img: zamorLogodf, talla: "--", tipo: "--" },
      { img: zamorLogodf, talla: "--", tipo: "--" },
      { img: zamorLogodf, talla: "--", tipo: "--" },
      { img: zamorLogodf, talla: "--", tipo: "--" },
    ]}
  />

  {/* BOLSOS */}
  <h3 id="bolsos" className="catalog-title">BOLSOS</h3>
  <CatalogSlider
    items={[
      { img: zamorLogodf, talla: "--", tipo: "--" },
      { img: zamorLogodf, talla: "--", tipo: "--" },
      { img: zamorLogodf, talla: "--", tipo: "--" },
      { img: zamorLogodf, talla: "--", tipo: "--" },
      { img: zamorLogodf, talla: "--", tipo: "--" },
      { img: zamorLogodf, talla: "--", tipo: "--" },
    ]}
  />
</section>


{/* RECOMENDACIONES */}
<section id="recomendaciones" className="section rec">
  <h2>RECOMENDACIONES</h2>
  <p className="rec-sub">
    Guía rápida para elegir tipo, talla y color.
  </p>
  

  {/* 1) Elige tu tipo de gorra */}
  <div className="rec-block">
    <h3>1) Elige tu tipo de gorra</h3>

    <div className="rec-cards">
      <article className="rec-card">
        <h4>Fitted (sellada)</h4>
        <p><strong>Para quién:</strong> si quieres talla exacta.</p>
        <p><strong>Ajuste:</strong> talla en cm (exacta).</p>
        <p className="tip"><strong>Tip:</strong> si estás entre dos tallas, sube 1.</p>
      </article>

      <article className="rec-card">
        <h4>Snapback</h4>
        <p><strong>Para quién:</strong> si prefieres ajustar fácil.</p>
        <p><strong>Ajuste:</strong> ajustable con broche.</p>
        <p className="tip"><strong>Tip:</strong> ideal si es regalo o duda de talla.</p>
      </article>

      <article className="rec-card">
        <h4>Strapback</h4>
        <p><strong>Para quién:</strong> si buscas ajuste fino y cómodo.</p>
        <p><strong>Ajuste:</strong> ajustable con correa.</p>
        <p className="tip"><strong>Tip:</strong> look más casual / diario.</p>
      </article>

      <article className="rec-card">
        <h4>Trucker</h4>
        <p><strong>Para quién:</strong> si quieres frescura.</p>
        <p><strong>Ajuste:</strong> normalmente ajustable.</p>
        <p className="tip"><strong>Tip:</strong> perfecta para calor y verano.</p>
      </article>
    </div>
  </div>
    <img
    src={estilosGorras}
    alt="Tipos de gorra (parte trasera)"
    className="cap-banner"
  />

  {/* 2) Qué talla soy */}
  <div className="rec-block">
    <h3>2) ¿Qué talla soy?</h3>

    <div className="size-steps">
      <div className="size-step">
        <div className="badge">1</div>
        <p><strong>Mide</strong> tu cabeza con cinta métrica (circunferencia en cm).</p>
      </div>

      <div className="size-step">
        <div className="badge">2</div>
        <p><strong>Compara</strong> con rangos:<br/> 
        <span className="pill">56–57 cm</span> <span className="pill">58–59 cm</span> <span className="pill">60–61 cm</span></p>
      </div>

      <div className="size-step">
        <div className="badge">3</div>
        <p><strong>Si dudas:</strong> mejor ajustable (Snapback/Strapback). <br/>
        <strong>En Fitted:</strong> si aprieta/molesta, sube talla.</p>
      </div>
    </div>
  </div>

  {/* 3) Colores según tu estilo */}
  <div className="rec-block">
    <h3>3) Colores según tu estilo</h3>

    <div className="swatches">
      <div className="swatch">
        <span className="dot c-black"></span>
        <div>
          <strong>Negro</strong>
          <p>Combina con todo</p>
        </div>
      </div>

      <div className="swatch">
        <span className="dot c-red"></span>
        <div>
          <strong>Rojo</strong>
          <p>Destaca / outfit simple</p>
        </div>
      </div>

      <div className="swatch">
        <span className="dot c-white"></span>
        <div>
          <strong>Blanco</strong>
          <p>Fresco y limpio</p>
        </div>
      </div>

      <div className="swatch">
        <span className="dot c-beige"></span>
        <div>
          <strong>Beige</strong>
          <p>Estilo casual</p>
        </div>
      </div>

      <div className="swatch">
        <span className="dot c-navy"></span>
        <div>
          <strong>Azul marino</strong>
          <p>Más elegante</p>
        </div>
      </div>
    </div>
  </div>

  {/* 4) Recomendación rápida */}
  <div className="rec-block">
    <h3>4) Recomendación rápida</h3>
    <p className="rec-mini">Elige una opción y te decimos la mejor.</p>

    <div className="quick">
      <button className="qbtn" onClick={() => alert("Entonces te va mejor una Fitted (talla exacta en cm).")}>
        Quiero talla exacta
      </button>
      <button className="qbtn" onClick={() => alert("Entonces te va mejor una Snapback o Strapback (ajustable).")}>
        Quiero ajustar
      </button>
      <button className="qbtn" onClick={() => alert("Entonces te va mejor una Trucker (más fresca).")}>
        Para calor
      </button>
      <button className="qbtn" onClick={() => alert("Entonces te va mejor una Snapback (estilo urbano).")}>
        Outfit urbano
      </button>
    </div>
  </div>
</section>


{/* CÓMO COMPRAR */}
<section id="como-comprar" className="section">
  <h2>CÓMO COMPRAR</h2>

  <ol className="steps">
    <li className="step">
      <h3>1) Elige tu producto</h3>
      <p>Ve al catálogo y selecciona la gorra o bolso que te guste.</p>
    </li>

    <li className="step">
      <h3>2) Escríbenos por WhatsApp</h3>
      <p>Envíanos la referencia del producto, color y cantidad.</p>
      <a
        className="btn-link"
        href="https://wa.me/573008725008?text=Hola%20Zamor%20Caps!%20Quiero%20hacer%20un%20pedido."
        target="_blank"
        rel="noreferrer"
      >
        Pedir por WhatsApp
      </a>
    </li>

    <li className="step">
      <h3>3) Confirmación y entrega</h3>
      <p>Confirmamos disponibilidad, precio y entrega/envío. ¡Listo!</p>
    </li>
  </ol>
</section>

{/* CONTACTO */}
<section id="contacto" className="section">
  <h2>CONTACTO</h2>

  <div className="contact">
    <a
      className="contact-item"
      href="https://wa.me/573008725008?text=Hola%20Zamor%20Caps!%20Quiero%20hacer%20un%20pedido."
      target="_blank"
      rel="noreferrer">
  <span className="contact-left">
    <img src={waIcon} alt="WhatsApp" className="contact-icon" />
    <strong>WhatsApp</strong>
  </span>
      <span>+57 300 8725008</span>
    </a>

    <a
      className="contact-item"
      href="https://www.instagram.com/zamor_caps/"
      target="_blank"
      rel="noreferrer"
    >
      <span className="contact-left">
        <img src={igIcon} alt="Instagram" className="contact-icon" />
        <strong>Instagram </strong>
      </span>
      <span>@zamor_caps</span>
    </a>

    <a
      className="contact-item"
      href="https://www.tiktok.com/@zamorcaps?_t=ZS-8yu2w6y8aDQ&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn1-sMVmLYmebG9T2ibcuM080osOsIXL4a730KTDarR3ERBU4SgRR9s2r13As_aem_J2kCtqCSJ8Cjt8GUkHZkmw"
      target="_blank"
      rel="noreferrer"
    >
      <span className="contact-left">
        <img src={ttIcon} alt="TikTok" className="contact-icon" />
        <strong>TikTok </strong>
      </span>
      <span>@zamorcaps</span>
    </a>
  </div>
</section>

<footer className="footer">
  <div className="footer-inner">
    <p>
      <strong>Zamor Caps</strong> — La información de tallas, tipos y colores es una guía orientativa.
      La disponibilidad puede variar según stock.
    </p>

    <p className="footer-small">
      © {new Date().getFullYear()} Zamor Caps. Todos los derechos reservados.
    </p>
  </div>
</footer>

    </>
  );
}

export default App;
