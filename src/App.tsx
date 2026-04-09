import React, { useState } from "react";
import Blusinha from "./components/blusinha";
import kitBlusinhas from "./assets/kit-blusinhas.png";
import tubeTopRosa from "./assets/tube-top-rosa.png";
import crocheVerde from "./assets/croche-verde.png";
import instagramIcon from "./assets/Instagram_icon.png";
import facebookIcon from "./assets/Facebook_logo.png";
import whatsappIcon from "./assets/whatsapp_logo.png";
import "./App.css";
import SearchBar from "./components";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const blusinhasList = [
    { image: kitBlusinhas, price: "55,00", title: "Kit 4 blusinhas" },
    { image: tubeTopRosa, price: "40,00", title: "Tube top rosa" },
    { image: crocheVerde, price: "65,00", title: "Blusinha crochê verde" },
  ];

  const filteredBlusinhas = blusinhasList.filter((blusinha) =>
    blusinha.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <p className="title">Lojinha do &lt;div&gt;a</p>
      </header>
      <div className="content">
        <div className="search-bar-container">
          <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
          <div className="social-bar">
            <a
              href="https://www.instagram.com/diva.citi/"
              className="social-button"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com"
              className="social-button"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://wa.me/"
              className="social-button"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
            </a>
          </div>
          
        </div>
        <div className="blusinhas-container">
          {filteredBlusinhas.map((blusinha, index) => (
            <Blusinha
              key={index}
              image={blusinha.image}
              price={blusinha.price}
              title={blusinha.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;